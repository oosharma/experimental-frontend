import React from 'react';
import {Link} from 'react-router';

class Navbar extends React.Component {  
  render() {
    return (
       <aside className="bg-black dk aside hidden-print" id="nav">
            <section className="vbox">
                <section className="w-f-md scrollable">
                    <div className="slim-scroll" data-height="auto" data-disable-fade-out="true" data-distance="0" data-size="10px" data-railOpacity="0.2">
                        <nav className="nav-primary hidden-xs">
                            <ul className="nav bg clearfix">
                                <li className="hidden-nav-xs padder m-t m-b-sm text-xs text-muted">
                                    Discover
                                </li>
                                <li>
                                    <Link to={`/`}>
                                        <i className="icon-disc icon text-success"></i>
                                        <span className="font-bold">Communities</span>
                                    </Link>
                                </li>
                                <li>
                                    <a href="genres.html">
                                        <i className="icon-music-tone-alt icon text-info"></i>
                                        <span className="font-bold">Playlists</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="listen.html">
                                        <i className="icon-list icon  text-info-dker"></i>
                                        <span className="font-bold">Artists</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="events.html">
                                        <i className="icon-heart icon text-danger"></i>
                                        <b className="badge bg-danger pull-right">6</b>
                                        <span className="font-bold">Favorites</span>
                                    </a>
                                </li>
                                <li className="m-b hidden-nav-xs"></li>
                            </ul>
                            <ul className="nav text-sm">
                                <li className="hidden-nav-xs padder m-t m-b-sm text-xs text-muted">
                                    <span className="pull-right"><a href="#"><i className="icon-plus i-lg"></i></a></span>
                                    <Link to={`/communities`}>My Communities</Link>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="icon-music-tone icon"></i>
                                        <span>Hip-Pop</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="icon-playlist icon text-success-lter"></i>
                                        <b className="badge bg-success dker pull-right">9</b>
                                        <span>Jazz</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </section>
                <footer className="footer controls__thumbnail hidden-xs no-padder text-center-nav-xs">
                    <div className="bg hidden-xs ">
                        <div className="dropdown dropup wrapper-sm clearfix">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                <span className="thumb-sm avatar pull-left m-l-xs">
                                <img src="images/a3.png" className="dker" alt="..." />
                                <i className="on b-black"></i>
                              </span>
                                <span className="hidden-nav-xs clear">
                                <span className="block m-l">
                                  <strong className="font-bold text-lt">John.Smith</strong>
                                  <b className="caret"></b>
                                </span>
                                <span className="text-muted text-xs block m-l">Art Director</span>
                                </span>
                            </a>
                            <ul className="dropdown-menu animated fadeInRight aside text-left">
                                <li>
                                    <span className="arrow bottom hidden-nav-xs"></span>
                                    <a href="#">Settings</a>
                                </li>
                                <li>
                                    <a href="profile.html">Profile</a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="badge bg-danger pull-right">3</span> Notifications
                                    </a>
                                </li>
                                <li>
                                    <a href="docs.html">Help</a>
                                </li>
                                <li className="divider"></li>
                                <li>
                                    <a href="modal.lockme.html" data-toggle="ajaxModal">Logout</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </section>
        </aside>
    );
  }
}

export default Navbar;