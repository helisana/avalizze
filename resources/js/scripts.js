function initMobileSidebar() {
  if (window.innerWidth < 996) {
    const btnMenu = document.querySelector('.navbar__menu-icon');
    const mobileSidebarOverlay = document.querySelector('.mobile-sidebar-overlay');
    const mobileSidebar = document.querySelector('.mobile-sidebar');
    const closeSidebar = document.querySelector('.mobile-sidebar__close');
    const menu = mobileSidebar.querySelector('.mobile-sidebar__menu');
    const menuItems = menu.querySelectorAll('li')

    btnMenu.addEventListener('click', showMobileSidebar);
    mobileSidebarOverlay.addEventListener('click', hideMobileSidebar);
    closeSidebar.addEventListener('click', hideMobileSidebar);

    for (let i = 0; i < menuItems.length; i++) {
      const menuItem = menuItems[i]
      const submenu = menuItem.querySelector('.navbar__submenu');

      if (submenu) {
        menuItem.addEventListener('click', mobileSidebarSubmenuClick);
      }
    }
  }
}

function showMobileSidebar() {
  const mobileSidebar = document.querySelector('.mobile-sidebar');
  const mobileSidebarOverlay = document.querySelector('.mobile-sidebar-overlay');

  gsap.to(mobileSidebar,{
    x: '0%',
    duration: 0.6,
  });

  gsap.set(mobileSidebarOverlay, {
    width: '100%'
  });

  gsap.to(mobileSidebarOverlay, {
    opacity: 1,
    duration: 0.6
  });

}

function hideMobileSidebar() {
  const mobileSidebar = document.querySelector('.mobile-sidebar');
  const mobileSidebarOverlay = document.querySelector('.mobile-sidebar-overlay');

  gsap.to(mobileSidebar,{
    x: '100%',
    duration: 0.6,
  });

  gsap.set(mobileSidebarOverlay, {
    width: '0%'
  });

  gsap.to(mobileSidebarOverlay, {
    opacity: 0,
    duration: 0.6
  });

}

function mobileSidebarSubmenuClick(event) {
  const target = event.currentTarget;

  if (target.classList.contains('open')) {
    hideMobileSidebarSubmenu(target);
  } else {
    showMobileSidebarSubmenu(target);
  }
}

function showMobileSidebarSubmenu(menuItem) {
  const caret = menuItem.querySelector('a img');

  gsap.set(menuItem, {
    height: 'auto',
  });

  gsap.from(menuItem, {
    height: '0px',
    duration: 0.6
  });

  if (caret) {
    gsap.to(caret, {
      rotation: 180,
      transformOrigin:'50% 50%',
      duration: 0.4
    });
  }

  menuItem.classList.add('open');
}

function hideMobileSidebarSubmenu(menuItem) {
  const caret = menuItem.querySelector('a img');

  gsap.to(menuItem, {
    height: '46px',
    duration: 0.32,
  })

  if (caret) {
    gsap.to(caret, {
      rotation: 0,
      transformOrigin:'50% 50%',
      duration: 0.4
    });
  }

  menuItem.classList.remove('open');
}


