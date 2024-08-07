import React, { Component } from 'react'
import NewsItem from './NewsItem';

export default class News extends Component {
articles = [
    {
        "source": {
            "id": "google-news",
            "name": "Google News"
        },
        "author": "POLITICO",
                    "title": "Siena poll: Harris gives Democrats breathing room in New York - POLITICO",
                    "description": null,
                    "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxOTll2WFM2NE91WG5QczF5WnhxTko3SnZla3lIREI2TnNlYl94ZUxocU9Fd2hHbFQxZ2xjc0M0TUl6RUd0LVNIR1E0WnctU0NPcGJlNVppQnR2cXRqTTZUNlJ1RURSOGEtNUJvZDdjTm9UcW1TRS1vN1FhODNwNmZNU1pRNGltTTQ?oc=5",
                    "urlToImage": null,
                    "publishedAt": "2024-08-06T09:30:00Z",
                    "content": null
                  },
                  {
                    "source": {
                      "id": "google-news",
                      "name": "Google News"
                    },
                    "author": "The New York Times",
                    "title": "Recession Fears May Be Overstated, but Not Unfounded - The New York Times",
                    "description": null,
                    "url": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxQQmdGNUdNSlBrLTJad0RfcjBoNTlub3UtSVZiWHdwMTZVRlZqNGM0QWFjREVQVnFGNkgxNWgtOXBtbHY0WG1yZzU3UjA1QUtTZVpjcVNpWUNQTU1pYklmOVBmeTl4cmt5NVQ4eElTUDg4LS1vb2JQdHROcHFWdVhKa013cUp1TmhK?oc=5",
                    "urlToImage": null,
                    "publishedAt": "2024-08-06T09:03:49Z",
                    "content": null
                  },
                  {
                    "source": {
                      "id": "google-news",
                      "name": "Google News"
                    },
                    "author": "NPR",
                    "title": "Poll: Arizona's Kelly is most liked as Harris' VP pick, but the field isn't well known - NPR",
                    "description": null,
                    "url": "https://news.google.com/rss/articles/CBMiggFBVV95cUxNajFRbV9CT3VabjVabm5MWDNZLVBOcGozbUhFc1hEOTdlM1VOdXFUV1hpVG1DdnVQVW1fMll5TGMzX1RsZXF4ajc0Rk9uQVloN0RNVmFxbGpJVC1ndWFvZkpnWk8tZ2pxSkRiR3dDNHNWeW9aTHhhekVjbTRUbzhGbkNB?oc=5",
                    "urlToImage": null,
                    "publishedAt": "2024-08-06T09:00:00Z",
                    "content": null
                  },
                  {
                    "source": {
                      "id": "google-news",
                      "name": "Google News"
                    },
                    "author": "CNN",
                    "title": "Japanese stocks rebound from worst crash since 1987 while global markets are mixed - CNN",
                    "description": null,
                    "url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxOZ2hMNjZoNHZyNmQ2bVJ5RFQ4N0tXTUN0Y0JuSW8xQ29ia050VXR4M0lyMVRoSzJLQWh3dWgzQmZHNGl2cFdRNWdQQjkwakc3TkVkVXNHWEdPVDd5VF9lY1VtZFhqdTVuY3AzM0h4VFg3Y2plbnU0dlE4enhrRnpxcndOSTJQeXVscFh4ZHBiSDY1aVY4d1RTTlBUbW9VX1nSAZYBQVVfeXFMTThHdjBWQ016OWlLUVlFLWFRa1RIejdITnF4c1ZZQ0l4RjdGaUVxbnM2WWRLSWZSaXhrMFljTVJUcHNZZ19seGVqWENRN0N4dEJ0M0NvSEIxZkVteGY0cEFJRlJiSEcxMGl0OHo1T2FDa3RzaXZHQ0Vmek5nTlM5M2NPRFF1QXVWRTBEMWpPck9BQ3pDRzdn?oc=5",
                    "urlToImage": null,
                    "publishedAt": "2024-08-06T08:37:30Z",
                    "content": null
                  },
                ]
                constructor(){
                    super();
                    console.log("Hello I am a constructor");
                    this.state = {
                        articles : this.articles
                    }
                }
                render() 
                {
                    return (
                        <div>
        <div className='container my-3'>
        <h2>Top News Headlines</h2>
        <div className='row mx-3 my-3'>
        {this.state.articles.map((element)=> {
            return   <div className='col-md-4 my-3' key={element.url}>
            <NewsItem  title = {element.title.slice(0, 45)} description = {element.description} imageUrl = "https://cdn.pixabay.com/photo/2016/03/26/22/47/motion-blur-1281675_640.jpg" newsUrl = {element.url}/>
     </div>
        })}
        </div>
        </div>
      </div>
    )
}
  }


