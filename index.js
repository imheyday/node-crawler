let axios = require('axios');
let cheerio = require('cheerio'); 
const { find } = require('cheerio/lib/api/traversing');
let fs = require('fs'); 

axios.get('https://kr.coinness.com/news/1002324')
	.then((response) => {
		if(response.status === 200) {
			var html = response.data
      let $ = cheerio.load(html);
      
      var html = html.substring(html.indexOf("newsDetailInfor"));
      var json = html.substring(html.indexOf("{"),html.indexOf("}"));
      json = json + "}";
      // console.log(json+"}"); 
      
      var obj = JSON.parse(json)
      console.log(obj);
      
      
      //console.log($(this).text().split('newsDetailInfor').text());
      
      // $('.news-container').each(function(i, elem) {
      //     news[i] = {
      //     title: $(this).children('.title').text()
      //         .replace(/(\r\n|\n|\r)/gm,"")
      //         .trim(),
      //     time: $(this).children('.content-wrap').children('.time').children('.month').text()
      //         .replace(/(\r\n|\n|\r)/gm,"")
      //         .trim(),
      //     content: $(this).children('.content-wrap').children('.content').text()
      //         .replace(/(\r\n|\n|\r)/gm,"")
      //         .trim(),
      // }
      //console.log(news);
      //   books[i] = {
      //     title: $(this).children('.title').children('.value').text()
			// 					 .replace(/(\r\n|\n|\r)/gm,"")
			// 					 .trim(),
      //     author: $(this).children('.author').children('.value').text()
			// 					 .replace('*', '')
			// 					 .split(',')
			// 					 .reverse()
			// 					 .map(name => name.trim())
			// 					 .join(' '),
      //     page_num: $(this).children('.num_pages').children('.value').text().split('pp')[0].trim(),
      //     rating: $(this).children('.avg_rating').children('.value').text().trim()
      //   }
      // });
            
      // /* 읽은시각, 뉴스작성시각, 타이틀, 내용, 관련코인, 관련코인 시세 */ 
      // fs.writeFile('data/books.json', 
      //   JSON.stringify(books, null, 4), (err)=>{
      //   console.log('File successfully written!');
      // })    
            
		}
}, (error) => console.log(error));