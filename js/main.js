/*  ---------------------------------------------------
    Theme Name: Anime
    Description: Anime video tamplate
    Author: Colorib
    Author URI: https://colorib.com/
    Version: 1.0
    Created: Colorib
---------------------------------------------------------  */

"use strict"
;(function ($) {
	/*------------------
        Preloader
    --------------------*/
	$(window).on("load", function () {
		$(".loader").fadeOut()
		$("#preloder").delay(200).fadeOut("slow")

		/*------------------
            FIlter
        --------------------*/
		$(".filter__controls li").on("click", function () {
			$(".filter__controls li").removeClass("active")
			$(this).addClass("active")
		})
		if ($(".filter__gallery").length > 0) {
			var containerEl = document.querySelector(".filter__gallery")
			var mixer = mixitup(containerEl)
		}
	})

	/*------------------
        Background Set
    --------------------*/
	$(".set-bg").each(function () {
		var bg = $(this).data("setbg")
		$(this).css("background-image", "url(" + bg + ")")
	})

	function linkProductImages(root) {
		$(root)
			.find(".product__item")
			.each(function () {
				var item = $(this)
				var image = item.find(".product__item__pic").first()
				var titleLink = item.find(".product__item__text h5 a").first()

				if (!image.length || !titleLink.length || image.parent("a").length) {
					return
				}

				image.wrap(
					$("<a>", {
						"aria-label": titleLink.text().trim(),
						class: "product__item__pic-link",
						href: titleLink.attr("href"),
						target: titleLink.attr("target") || null,
					})
				)
			})
	}

	linkProductImages(document)

	// Search model
	$(".search-switch").on("click", function () {
		$(".search-model").fadeIn(400)
	})

	$(".search-close-switch").on("click", function () {
		$(".search-model").fadeOut(400, function () {
			$("#search-input").val("")
		})
	})

	/*------------------
		Navigation
	--------------------*/
	$(".mobile-menu").slicknav({
		prependTo: "#mobile-menu-wrap",
		allowParentLinks: true,
	})

	/*------------------
		Top Views Tabs
	--------------------*/
	$(".top-views__tabs li").on("click", function () {
		var tab = $(this).data("view-tab")
		var wrapper = $(this).closest(".top-views")

		$(this).siblings().removeClass("active")
		$(this).addClass("active")
		wrapper.find(".top-views__panel").removeClass("active")
		wrapper.find('[data-view-panel="' + tab + '"]').addClass("active")
	})

	/*------------------
		Hero Slider
	--------------------*/
	var hero_s = $(".hero__slider")
	hero_s.owlCarousel({
		loop: true,
		margin: 0,
		items: 1,
		dots: true,
		nav: true,
		navText: [
			"<span class='arrow_carrot-left'></span>",
			"<span class='arrow_carrot-right'></span>",
		],
		animateOut: "fadeOut",
		animateIn: "fadeIn",
		smartSpeed: 200,
		autoHeight: false,
		autoplay: true,
		mouseDrag: false,
	})

	/*------------------
        Video Player
    --------------------*/
	const player = new Plyr("#player", {
		controls: [
			"play-large",
			"play",
			"progress",
			"current-time",
			"mute",
			"captions",
			"settings",
			"fullscreen",
		],
		seekTime: 25,
	})

	/*------------------
        Niceselect
    --------------------*/
	$("select").niceSelect()

	/*------------------
        Mod Search
    --------------------*/
	function normalizeText(value) {
		return (value || "")
			.toString()
			.normalize("NFD")
			.replace(/[\u0300-\u036f]/g, "")
			.toLowerCase()
	}

	function setupModSearch() {
		var searchInput = document.querySelector(".mod-search__input")
		var modList = document.querySelector("[data-mod-list]")

		if (!searchInput || !modList) {
			return
		}

		var pages = [
			"lista.html",
			"lista-2.html",
			"lista-3.html",
			"lista-4.html",
			"lista-5.html",
		]
		var currentPage = window.location.pathname.split("/").pop() || "lista.html"
		var originalCardsHtml = modList.innerHTML
		var clearButton = document.querySelector(".mod-search__clear")
		var status = document.querySelector(".mod-search__status")
		var pagination = document.querySelector(".product__pagination")
		var emptyState = document.createElement("div")
		var activeTag = ""
		var catalog = []
		var catalogReady = false

		emptyState.className = "mod-search__empty"
		emptyState.textContent = "Nenhum mod encontrado no catálogo."
		emptyState.hidden = true
		modList.parentNode.insertBefore(emptyState, modList.nextSibling)

		function applyBackgrounds(root) {
			Array.prototype.slice.call(root.querySelectorAll(".set-bg")).forEach(
				function (element) {
					var bg = element.getAttribute("data-setbg")
					if (bg) {
						element.style.backgroundImage = "url(" + bg + ")"
					}
				}
			)
		}

		function getCardData(column, pageName) {
			var card = column.querySelector(".product__item")
			var link = card && card.querySelector("h5 a")
			var tags = Array.prototype.slice
				.call(card ? card.querySelectorAll(".product__item__text li") : [])
				.map(function (tag) {
					return tag.textContent.trim()
				})
				.filter(Boolean)

			return {
				html: column.outerHTML,
				key: normalizeText((link && link.getAttribute("href")) || column.textContent),
				page: pageName,
				searchText: normalizeText(column.textContent),
				tags: tags,
				title: link ? link.textContent.trim() : "",
			}
		}

		function extractCards(doc, pageName) {
			var list = doc.querySelector("[data-mod-list]")
			if (!list) {
				return []
			}

			return Array.prototype.slice
				.call(list.children)
				.filter(function (column) {
					return column.querySelector(".product__item")
				})
				.map(function (column) {
					return getCardData(column, pageName)
				})
		}

		function enhanceCards(root) {
			Array.prototype.slice.call(root.querySelectorAll(".product__item")).forEach(
				function (card) {
					Array.prototype.slice
						.call(card.querySelectorAll(".product__item__text li"))
						.forEach(function (tag) {
							if (tag.querySelector("button")) {
								return
							}

							var tagText = tag.textContent.trim()
							var button = document.createElement("button")
							button.className = "product__tag"
							button.type = "button"
							button.textContent = tagText
							button.setAttribute("data-tag", tagText)
							tag.textContent = ""
							tag.appendChild(button)
						})
				}
			)
		}

		function renderCards(cards) {
			modList.innerHTML = cards
				.map(function (card) {
					return card.html
				})
				.join("")
			applyBackgrounds(modList)
			linkProductImages(modList)
			enhanceCards(modList)
		}

		function resetToCurrentPage() {
			modList.innerHTML = originalCardsHtml
			applyBackgrounds(modList)
			linkProductImages(modList)
			enhanceCards(modList)
		}

		function setStatus(message) {
			if (status) {
				status.textContent = message
			}
		}

		function updateClearButton(hasFilter) {
			if (clearButton) {
				clearButton.hidden = !hasFilter
			}
		}

		function loadCatalog() {
			return Promise.all(
				pages.map(function (page) {
					if (page === currentPage) {
						return Promise.resolve(extractCards(document, page))
					}

					return fetch(page)
						.then(function (response) {
							return response.text()
						})
						.then(function (html) {
							return extractCards(
								new DOMParser().parseFromString(html, "text/html"),
								page
							)
						})
						.catch(function () {
							return []
						})
				})
			).then(function (groups) {
				var seen = {}

				catalog = []
				groups.forEach(function (group) {
					group.forEach(function (card) {
						if (!seen[card.key]) {
							seen[card.key] = true
							catalog.push(card)
						}
					})
				})

				catalogReady = true
				return catalog
			})
		}

		var catalogPromise = loadCatalog().then(function () {
			filterCards()
		})

		function filterCards() {
			var query = normalizeText(searchInput.value)
			var tagQuery = normalizeText(activeTag)
			var hasFilter = !!query || !!activeTag

			if (!hasFilter) {
				resetToCurrentPage()
				emptyState.hidden = true
				updateClearButton(false)
				if (pagination) {
					pagination.classList.remove("is-searching")
				}
				setStatus(
					modList.querySelectorAll(".product__item").length + " mods nesta página"
				)
				return
			}

			if (!catalogReady) {
				setStatus("Carregando catálogo completo...")
				catalogPromise.then(filterCards)
				return
			}

			if (pagination) {
				pagination.classList.add("is-searching")
			}

			var matches = catalog.filter(function (card) {
				var matchesQuery = !query || card.searchText.indexOf(query) !== -1
				var matchesTag =
					!tagQuery ||
					card.tags.some(function (tag) {
						return normalizeText(tag) === tagQuery
					})

				return matchesQuery && matchesTag
			})

			renderCards(matches)
			emptyState.hidden = matches.length > 0
			updateClearButton(true)

			setStatus(
				matches.length +
					" resultado(s) no catálogo" +
					(activeTag ? ' com a tag "' + activeTag + '"' : "")
			)
		}

		searchInput.addEventListener("input", function () {
			activeTag = ""
			filterCards()
		})

		modList.addEventListener("click", function (event) {
			var tagButton = event.target.closest(".product__tag")

			if (!tagButton) {
				return
			}

			activeTag = tagButton.getAttribute("data-tag") || tagButton.textContent.trim()
			searchInput.value = ""
			filterCards()
			searchInput.focus()
		})

		if (clearButton) {
			clearButton.addEventListener("click", function () {
				searchInput.value = ""
				activeTag = ""
				searchInput.focus()
				filterCards()
			})
		}

		applyBackgrounds(modList)
		linkProductImages(modList)
		enhanceCards(modList)
		filterCards()
	}

	setupModSearch()

	/*------------------
        Scroll To Top
    --------------------*/
	$("#scrollToTopButton").click(function () {
		$("html, body").animate(
			{
				scrollTop: 0,
			},
			"slow"
		)
		return false
	})
})(jQuery)
