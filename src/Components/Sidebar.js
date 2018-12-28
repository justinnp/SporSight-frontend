import React from 'react';
import '../CSS/sidebar.css';

const Sidebar = () => {
    return (
        <div id="sidebar-container" class="sidebar-expanded d-none d-md-block col-2">
            <ul class="list-group sticky-top sticky-offset">
                <li class="list-group-item sidebar-separator-title text-muted d-flex align-items-center menu-collapsed">
                    <small>MAIN MENU</small>
                </li>
                <a href="#submenu1" data-toggle="collapse" aria-expanded="false" class="bg-dark list-group-item list-group-item-action flex-column align-items-start">
                    <div class="d-flex w-100 justify-content-start align-items-center">
                        <span class="fa fa-dashboard fa-fw mr-3"></span>
                        <span class="menu-collapsed">Dashboard</span>
                        <span class="submenu-icon ml-auto"></span>
                    </div>
                </a>
                <div id="submenu1" class="collapse sidebar-submenu">
                    <a href="#" class="list-group-item list-group-item-action bg-dark text-white">
                        <span class="menu-collapsed">Charts</span>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action bg-dark text-white">
                        <span class="menu-collapsed">Reports</span>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action bg-dark text-white">
                        <span class="menu-collapsed">Tables</span>
                    </a>
                </div>
                <a href="#submenu2" data-toggle="collapse" aria-expanded="false" class="bg-dark list-group-item list-group-item-action flex-column align-items-start">
                    <div class="d-flex w-100 justify-content-start align-items-center">
                        <span class="fa fa-user fa-fw mr-3"></span>
                        <span class="menu-collapsed">Profile</span>
                        <span class="submenu-icon ml-auto"></span>
                    </div>
                </a>
                <div id="submenu2" class="collapse sidebar-submenu">
                    <a href="#" class="list-group-item list-group-item-action bg-dark text-white">
                        <span class="menu-collapsed">Account Settings</span>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action bg-dark text-white">
                        <span class="menu-collapsed">Subscriptions</span>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action bg-dark text-white">
                        <span class="menu-collapsed">Logout</span>
                    </a>
                </div>
                <a href="#" class="bg-dark list-group-item list-group-item-action">
                    <div class="d-flex w-100 justify-content-start align-items-center">
                        <span class="fa fa-tasks fa-fw mr-3"></span>
                        <span class="menu-collapsed">Tasks</span>
                    </div>
                </a>
                <li class="list-group-item sidebar-separator-title text-muted d-flex align-items-center menu-collapsed">
                    <small>Other</small>
                </li>
                <a href="#submenu3" data-toggle="collapse" aria-expanded="false" class="bg-dark list-group-item list-group-item-action flex-column align-items-start">
                    <div class="d-flex w-100 justify-content-start align-items-center">
                        <span class="fa fa-dashboard fa-fw mr-3"></span>
                        <span class="menu-collapsed">SporSight</span>
                        <span class="submenu-icon ml-auto"></span>
                    </div>
                </a>
                <div id="submenu3" class="collapse sidebar-submenu">
                    <a href="#" class="list-group-item list-group-item-action bg-dark text-white">
                        <span class="menu-collapsed">About Us</span>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action bg-dark text-white">
                        <span class="menu-collapsed">Contact Us</span>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action bg-dark text-white">
                        <span class="menu-collapsed">Privacy Policy</span>
                    </a>
                </div>
            </ul>
        </div>
    ) 
    
}
export default Sidebar;
