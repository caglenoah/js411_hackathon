import React from 'react';

function Footer() {
  return (
    <center>
        <>
        <footer className="Footer">
            <ul className="Footer_list">
                <li><a href="https://hn.algolia.com/about" style={{ textDecoration: 'none' }}>About</a></li>                
                <li> •  </li>
                <li><a href="https://hn.algolia.com/settings" style={{ textDecoration: 'none' }}>Setting</a></li>
                <li> •  </li>
                <li><a href="https://hn.algolia.com/help" style={{ textDecoration: 'none' }}>Help</a></li>
                <li> •  </li>
                <li><a href="https://hn.algolia.com/api" style={{ textDecoration: 'none' }}>API Documentation</a></li>
                <li> •  </li>
                <li><a href="https://news.ycombinator.com/" style={{ textDecoration: 'none' }}>Hacker News</a></li>
                <li> •  </li>
                <li><a href="https://github.com/algolia/hn-search" style={{ textDecoration: 'none' }}>Fork/Contribute</a></li>
                <li> •  </li>
                <li><a href="https://hn.algolia.com/cool_apps" style={{ textDecoration: 'none' }}>Cool Apps</a></li>
            </ul>
        </footer>
        </>
    </center>
    );
};

export default Footer;

