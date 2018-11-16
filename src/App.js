import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import NavBar from './components/NavBar';
import NewsItem from './components/NewsItem';
import styles from './styles.js';
import axios from 'axios';
import cheerio from 'cheerio';

class App extends Component {
    state = {
        scrapedArticles: [],
        openItem: null,
    };

    getNewsArticles = async () => {
        const tribData = await axios.get('https://cors-anywhere.herokuapp.com/https://www.sltrib.com');
        const $ = cheerio.load(tribData.data);
        let selectedData = $('.d-block', '.photo-wrapper')
            .filter((i, el) => el.type === 'tag')
            .map((i, el) => {
                let picData = $(el)
                    .contents()
                    .filter((i, el) => el.type === 'tag');
                return {
                    link: 'https://www.sltrib.com' + $(el).attr('href'),
                    data: { text: picData.attr('alt'), image: picData.attr('data-original') },
                };
            });
        this.setState({ scrapedArticles: Array.from(selectedData) });
    };

    changeOpenItem = val => this.setState({ openItem: val });

    componentDidMount() {
        this.getNewsArticles();
    }

    render() {
        const { classes } = this.props;
        const { scrapedArticles, openItem } = this.state;
        return (
            <React.Fragment>
                <NavBar classes={classes} />
                {scrapedArticles.length > 0 &&
                    scrapedArticles.map((newsItem, i) => {
                        return (
                            <NewsItem
                                key={`NewsItem_${i}`}
                                isOpen={openItem}
                                handleClick={this.changeOpenItem}
                                text={newsItem.data.text}
                                index={i}
                                link={newsItem.link}
                                image={newsItem.data.image}
                            />
                        );
                    })}
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(App);
