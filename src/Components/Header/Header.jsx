import React from 'react';
import '../Header/header.scss'

function Header() {
	return (
		<div>
			<header className="header">
				<div className="header__icon">Иконка</div>
				<div className="header__catalog-menu">Каталог</div>
				<div className="header__search-tab">
					<input type="search" name="" id="" />
				</div>
				<nav className="header__nav-tab">
					<div className="header__nav-tab__profile">Войти</div>
					<div className="header__nav-tab__cart">Корзина</div>
					<div className="header__nav-tab__orderInfo">Заказы</div>
					<div className="header__nav-tab__wishlist">Избранное</div>
				</nav>
			</header>
		</div>
	);
}

export default Header;