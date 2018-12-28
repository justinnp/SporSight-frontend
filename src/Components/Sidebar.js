import React, { Component } from 'react';
import $ from 'jquery';
import '../CSS/sidebar.css';

const Sidebar = () => {
    return (
    <div class="wrapper">
        <nav id="sidebar">
            <div class="sidebar-header">
                <h3>SporSight</h3>
            </div>
            <ul class="list-unstyled components">
                <p>Athlete Technique Analysis</p>
                <li class="active">
                    <a href="#">Dashboard</a>
                </li>
                <li class="active">
                    <a href="#">Team Roster</a>
                </li>
                <li class="active">
                    <a href="#">Video Upload</a>
                </li>
                <li class="active">
                    <a href="#">Videos</a>
                </li>
            </ul>
        </nav>
    </div>
    ) 
    
}
export default Sidebar;
