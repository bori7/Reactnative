

import React, {useEffect,useState} from 'react';
   import { View,  ScrollView ,Text, Image,StyleSheet ,ActivityIndicator} from 'react-native'
   import { Card } from 'react-native-elements'
   import {Search} from './searchBar'

  
 export const News = (props) => {
    
const link = 'http://newsapi.org/v2/everything?q=tesla&from=2021-01-18&sortBy=publishedAt&apiKey=1910d5dee3cb4b1a847262aa417d5cd9'
    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect (() => {

        getNews()
        
	}, [])

    const getNews = ()=>{

       setLoading(true);
          fetch(link)
          .then(res => res.json() )
          .then(
              res => {
                  setNews(res.articles);
                  // console.table(res.articles)
                  setLoading(false);
              }
          )
       
     return false;
}


    return(
      <View>
        <ScrollView>
        <View style={{
          margin:15
           }}
        >
          <Text  style ={{
            padding:15,
            fontWeight:'bold'
              }}
          > Search
          </Text>
          <Search />
        </View>
     

    <Card>
    <Card.Title 
          style ={{
             textAlign: 'left',
            fontWeight:'bold'
            }}
    >News
    </Card.Title>

    <Card.Divider/>

    {!loading && news?
      news.map((u, i) => {
        return (
          <View key={i} 
            style={{
              flexDirection:'row',
              padding:10,
              }}
          >
            <View 
              style={{
                  flexDirection:'row',
                    }}
            >
              <Image
                  style={[styles.logo,
                    
                  ]}
                  resizeMode="cover"
                  source={{ uri: u.urlToImage }}
              />
            </View>
                
            <View 
              style={{
                flexDirection:'row',
                flex:1,
                alignItems:'flex-start',
                flexWrap:'wrap',
                textAlign:'left',
              }}
            >
              <Text 
                style={{
                  // fontSize:15,
                  fontWeight:'bold',
                  marginBottom:5
               
                }}
              >
                {u.author}</Text>
              <Text  
                style={{
                 
                  marginTop:5
                }}
              >
                {u.title}</Text>
            </View>

            <View>
              <Text
                style={{
                  marginLeft:5
                }}
              >
              {(new Date(u.publishedAt)).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }).slice(0,-3)}
            </Text>
            </View>
                
      <Card.Divider/>
    </View> 
        );
      })
    : <View style={[styles.container, styles.horizontal]}>
   
        <ActivityIndicator size="large" color="#00ff00" />
    </View>
}
  </Card>
  </ScrollView>
</View>
  
    )
 }  
  
 const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    logo: {
      width: 66,
      height: 58,
      marginRight:5,
    },
    containerload: {
        flex: 1,
        justifyContent: "center"
    },
    horizontalload: {
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 10
    }
  });

  
//   // implemented without image without header, using ListItem component
//    <Card containerStyle={{padding: 0}} >
//     {
//       users.map((u, i) => <ListItem key={i} />)
//     },

//   </Card>
   
   // implemented with Text and Button as children
//    <Card>
//      <Card.Title>HELLO WORLD</Card.Title>
//      <Card.Divider/>
//      <Card.Image source={require('../images/pic2.jpg')}>
//        <Text style={{marginBottom: 10}}>
//          The idea with React Native Elements is more about component structure than actual design.
//        </Text>
//        <Button
//          icon={<Icon name='code' color='#ffffff' />}
//          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
//          title='VIEW NOW' />
//      </Card.Image>
//    </Card>