/**
 * client/src/components/TopNavBar/TopNavBar.js
 */

import React, { Component } from 'react';

const CONSTANT = {
    IMAGE_URL: 'image'
};

/**
 * @description This class creates the Top Navigation Bar.
 * @author <ericwaidesign@gmail.com>
 */
class TopNavBar extends Component {
    render() {
        console.log('-- TopNavBar.render() --');

        const navBars = () => [
            <div>
                {/* mobile navigation bar */}
                <div class="title-bar topbar-center-logo-mobile" data-responsive-toggle="topbar-center-logo" data-hide-for="medium">
                    <div class="title-bar-left">
                        <div class="title-bar-title"><img src="" alt="" /></div>
                    </div>
                    <div class="title-bar-right">
                        <button class="menu-icon" type="button" data-toggle="topbar-center-logo"></button>
                    </div>
                </div>
                
                {/* navigation bar */}
                <div class="top-bar topbar-center-logo" id="topbar-center-logo">
                    <div class="top-bar-center">
                        <a href="#"><img src="" alt="" /></a>
                    </div>
                </div>
            </div>
        ];

        return(
            {navBars}
        );   
    }
}