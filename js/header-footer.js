window.addEventListener("load", () => {
		const main = document.querySelector("main"),
		body = document.body,
		page = window.location.pathname,
		navBurger = document.getElementById("nav__burger"),
		navMenu = document.getElementById("nav__menu"),
		navList = document.getElementById("nav__list");
		navBurger.addEventListener("click", () => {
				navBurger.classList.toggle("_active");
				navMenu.classList.toggle("_active");
				navList.classList.toggle("_active");
				body.classList.toggle("_lock")
		});

		const currentPage = window.location.pathname,
		menuItems = document.querySelectorAll('.nav__item');
		menuItems.forEach(item => {
				const link = item.children[0].pathname;
				if (link === currentPage) {
						item.classList.add('_active');
				}
		});
		if (currentPage.toLowerCase().indexOf("forms") >= 0) {
				menuItems[2].classList.add('_active');
		}
		if (currentPage.toLowerCase().indexOf("lux-packages") >= 0) {
				menuItems[1].classList.add('_active');
		}

		const modal = document.getElementById("modal"),
		modalFrame = document.getElementById("modal__frame"),
		modalMenu = document.getElementById("modal__menu"),
		modalClose = document.getElementById("modal__close"),
		modalBtn = document.getElementById("modal__btn"),
		callBtn = document.querySelectorAll(".call__btn"),
		callBtnMain = document.querySelectorAll(".call__btn-main"),
		nav = document.getElementById("nav");

		if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
				const mainPagePadding = document.querySelector(".main-block__body");
				document.addEventListener('click', (close) => {
						if (close.target === modalClose || close.target === modal || close.target === modalBtn) {
								body.style.padding = `0`;
								nav.style.left = `50%`;
								nav.style.width = `100%`;
								mainPagePadding.style.width = `100%`;
								modal.classList.remove("_active");
								modalFrame.classList.remove("_active")
								modalMenu.classList.remove('_active');
								body.classList.remove("_lock");
						}
				});
				
				callBtn.forEach((btn) => {
						btn.addEventListener('click', () => {
							let scrollWidth = window.innerWidth - document.body.clientWidth,
							mainPageWidth = mainPagePadding.offsetWidth;
								body.style.padding = `0 ${scrollWidth}px 0 0`
								nav.style.left = `${nav.offsetLeft + scrollWidth / 2}px`
								mainPagePadding.style.width = `${mainPageWidth}px`;
								modal.classList.add("_active");
								modalFrame.classList.add("_active")
								modalMenu.classList.add('_active');
								body.classList.add("_lock");
						});
				});
		
				callBtnMain.forEach((btn) => {
						btn.addEventListener('click', () => {
							let scrollWidth = window.innerWidth - document.body.clientWidth;
								body.style.padding = `0 ${scrollWidth}px 0 0`
								nav.style.left = `${nav.offsetLeft}px`
								modal.classList.add("_active");
								modalFrame.classList.add("_active")
								modalMenu.classList.add('_active');
								body.classList.add("_lock");
						});
				});
		} else {
				document.addEventListener('click', (close) => {    
						if (close.target === modalClose || close.target === modal || close.target === modalBtn) {
								body.style.padding = `0`;
								nav.style.left = `50%`;
								nav.style.width = `100%`;
								modal.classList.remove("_active");
								modalFrame.classList.remove("_active");
								modalMenu.classList.remove('_active');
								body.classList.remove("_lock");
						}
				});
		
				callBtn.forEach((btn) => {
						btn.addEventListener('click', () => {
							let scrollWidth = window.innerWidth - document.body.clientWidth;
								nav.style.width = `${nav.offsetWidth}px`;
								body.style.padding = `0 ${scrollWidth}px 0 0`;
								nav.style.left = `${nav.offsetLeft}px`;
								modal.classList.add("_active");
								modalFrame.classList.add("_active")
								modalMenu.classList.add('_active');
								body.classList.add("_lock");
						});
				});
		
				callBtnMain.forEach((btn) => {
						btn.addEventListener('click', () => {
							let scrollWidth = window.innerWidth - document.body.clientWidth;
								nav.style.width = `${nav.offsetWidth}px`;
								body.style.padding = `0 ${scrollWidth}px 0 0`
								nav.style.left = `${nav.offsetLeft}px`
								modal.classList.add("_active");
								modalFrame.classList.add("_active")
								modalMenu.classList.add('_active');
								body.classList.add("_lock");
						});
				});
		}
});