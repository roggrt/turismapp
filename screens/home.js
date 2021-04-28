import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ImageBackground, ScrollView, TouchableOpacity, FlatList, TextInput, ActivityIndicator  } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons"
import {    responsiveScreenHeight, responsiveScreenWidth, responsiveScreenFontSize,} from "react-native-responsive-dimensions";
import {    widthPercentageToDP as wp,    heightPercentageToDP as hp,  } from "react-native-responsive-screen";
import { Image, withBadge } from 'react-native-elements';
import { SafeAreaView } from "react-native-safe-area-context";

//imagenes
const fondo = { uri: "https://www.besttripecuador.com/wp-content/uploads/2019/11/cosas-que-hacer-en-cuenca-en-la-noche.jpg" };


const Home = ({navigation}) => {
const image = { uri: "https://www.cideu.org/wp-content/uploads/Cuenca-ciudad-1.jpg"};
const recentImage = {uri: "https://www.cideu.org/wp-content/uploads/Cuenca-ciudad-1.jpg"};
  const cuenca =
    "Cuenca, la ciudad de los cuatro rios";
    const [gallery, setgallery] = useState([
            {
              image: {
                uri:
                  "https://ec.viajandox.com/uploads/Parque%20Nacional%20el%20Cajas_3.jpg",
              },
              title: "EL Cajas",
              descripcion: "El nombre de Cajas es tomado por la forma de las montañas del sector dentro de las cuales se encuentran los lagos y lagunas.",
              descripcion2: "Es el lugar adecuado para estar en contacto con la naturaleza, la diversión, educación ambiental, turismo e investigación. Al caminar entre sus lagunas se admiran curiquingues, gaviotas andinas y otras aves del páramo.",
              descripcion3: "En el parque existen 235 lagunas bien definidas, entre las más importantes están Lagartococha, Osohuaycu, Mamamag ó Taitachungo, Quinoascocha, La Toreadora, Sunincocha, Cascarillas, Ventanas y Tinguishcocha.",
              descripcion4: "Los ríos Tomebamba, Mazán, Yanuncay y Miguir nacen en el Cajas y abastecen de agua potable a la ciudad de Cuenca; a su vez son los principales aportadores del Complejo Hidroeléctrico Paute.",
              key: "1",
            },
            {
              image: {
                uri:
                  "https://ec.viajandox.com/uploads/Aguas%20Termales%20de%20Ba%C3%B1os_5.jpg",
              },
              title: "Baños",
              descripcion: "Es una parroquia del cantón Cuenca posee un sin número de bellezas naturales entre las que destacan sus aguas termales y sus hermosas campiñas.",
              descripcion2: "Se dice que Baños tuvo un florecimiento en 1693 por lo que se cree que su fundación fue a finales de 1500.",
              descripcion3: "La actividad turística representa la mayoría de los ingresos de esta parroquia.",
              descripcion4: "Baños como asentamiento humano remota a la época pre colonial, debido a la existencia de recursos naturales como las aguas termales, por lo que debió ser poblado por los Cañaris.",
              
              key: "2",
            },
            {
              image: {
                uri:
                  "https://ec.viajandox.com/uploads/Centro%20Cuenca_1.jpg",
              },
              title: "Centro Historico",
              descripcion: "El Centro Histórico de Santa Ana de los Cuatro Ríos de Cuenca, es un lugar turístico de la ciudad de Cuenca. Declarado Patrimonio de la Humanidad por la UNESCO desde 1999.",
              descripcion2: "El Centro Histórico de Santa Ana de los cuatro ríos de Cuenca, cuya zona central ocupa 224,14 hectáreas.",
              descripcion3: "El Centro Histórico de Cuenca tiene casas e iglesias construidas en el siglo XIX como principales características turísticas. ",
              descripcion4: "Además los barrios populares desde la Colonia, venían produciendo artes populares, entre ellas: la cerámica, la forja de hierro, la ebanistería, la joyería, el tejido de sombreros de paja toquilla, los bordados y las talabarterías. ",
              
              key: "3",
            },
            {
              image: {
                uri:
                  "https://ec.viajandox.com/uploads/Museo%20Monasterio%20de%20las%20Conceptas_4.jpg",
              },
              title: "Museo Monasterio",
              descripcion: "Este museo funciona como parte del Claustro del Monasterio de las Conceptas, cedido por las religiosa para transformarlas en Patrimonio Cultural de la ciudad.",
              descripcion2: "La fundación del monasterio data del año de 1599. En el siglo XVII la manzana íntegra pasa a ser propiedad de la orden religiosa.",
              descripcion3: "El convento a pesar de tener muchos años de existencia se caracterizó por recibir ricas dotes y donaciones, que en su contexto social y económico le daban un trato especial.",
              descripcion4: "Actualmente el Museo del Monasterio de las Conceptas, cuenta con 24 salas; 8 de estas se encuentran en la planta baja, donde se brinda información sobre el convento, su restauración, y cómo se desarrolla la vida cotidiana de las religiosas.",
              
              key: "4",
            },
            {
                image: {
                  uri:
                    "https://img.goraymi.com/2019/08/22/c8d5022e8a701a2dd5ee7144673f1b2b_lg.jpg",
                },
                title: "Parque arquelogico Pumapungo",
              descripcion: "El Parque arqueológico de Pumapungo es un sitio arqueológico inca, ubicado en Cuenca. Abarca unas 4 hectáreas.",
              descripcion2: "Fue ocupado por los Cañaris hasta la conquista de Túpac Yupanqui. Luego lo ocuparon los incas hasta la colonización española.",
              descripcion3: "Luego lo ocuparon los incas hasta la colonización española. Con la llegada de los incas se convirtió en un fuerte militar. ",
              descripcion4: "Pumapungo fue destruido antes de la llegada de los españoles debido a la guerra civil incaica y constituiría parte de Tomebamba. Los materiales de construcción utilizados son en su mayoría rocas volcánicas ",
              
                key: "5",
              },
          ]);

          


          const [counter, setCounter] = useState(1);
          const BadgedIcon = withBadge(counter)(Icon)
return(
    <SafeAreaView>
    <View style={{flexGrow:1}}>
      <View>
        <ImageBackground source={fondo} style={styles.image}>
          <View style={styles.searchContainer}>
            
            <Text style={styles.userGreet}>Hola, personita</Text>
            <Text style={styles.userText}>
             que lugar te gustaria visitar hoy dimelo ???
            </Text>
          </View>
          <View>
            <TextInput
              style={styles.searchBox}
              placeholder="search destination"
              placeholderTextColor="#666"
            ></TextInput>
            <Icon
              name="search-outline"
              size={hp("3%")}
              color="#666"
              style={{
                position: "absolute",
                top: hp("4.5%"),
                right: wp("30%"),
                opacity: 0.6,
              }}
            />
          </View>
          <TouchableOpacity  
              onPress={() => navigation.navigate("Login") }
              style={{
              position: "absolute",
              top: hp("1.5%"),
              left: "5%",
            }}>
          <Icon
            name="menu-outline"
            size={hp("4%")}
            color="#fff"
          />
          </TouchableOpacity>
        
            <TouchableOpacity
              onPress={() => setCounter(counter+1)}
              style={{
              position: "absolute",
              top: hp("2%"),
              right: "5%",
            }}
            > 
            <BadgedIcon 
            type="ionicon" 
            name="notifications-outline" 
            size={hp("3%")} 
            color="#fff"
           
            />

            </TouchableOpacity>
          
        </ImageBackground>
      
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ padding: 16 }}>
          <Text style={{ fontSize: hp("2.5%"), fontWeight: "bold" }}>
            Top Trending
          </Text>
        </View>
        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={gallery}
            horizontal={true}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    paddingVertical: hp("1%"),
                    paddingHorizontal: wp("0.5%"),
                  }}
                >
                  <TouchableOpacity
                    onPress={() => navigation.navigate("PostDetails", { item, gallery } )}
                    style={{
                      shadowColor: "#000",
                      shadowOffset: {
                        width: 0,
                        height: 20,
                      },
                      shadowOpacity: 0.34,
                      shadowRadius: 6.27,

                      elevation: 10,
                    }}
                  >
                        <Image
                          source={item.image}
                          image={item.image}
                          PlaceholderContent={<ActivityIndicator size="small" color="#0000ff" />}
                          
                          style={{
                            width: responsiveScreenWidth(40),
                            marginRight: wp("2%"),
                            height: responsiveScreenHeight(20),
                            borderRadius: 10,
                          }}
                        />

                    <Icon
                      name="pin-outline"
                      size={hp("2.5%")}
                      color="#fff"
                      style={styles.imageLocationIcon}
                    />
                    <Text style={styles.imageText}>{item.title}</Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
        <View style={{ marginBottom: hp("5%"), }}>
          <View
            style={{
              padding: hp("2%"),
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: hp("2.5%"), fontWeight: "bold" }}>
              Recien Visto
            </Text>
           <TouchableOpacity onPress={() => navigation.navigate('Example')}>
           <Text
              style={{
                fontSize: hp("2%"),
                fontWeight: "bold",
                color: "#ff6200",
              }}
            >
              Ver mas
            </Text>
           </TouchableOpacity>
          </View>
      
         <Image
            source={recentImage}
            style={{
              width: "95%",
              height: hp("30%"),
              borderRadius: 10,
              marginLeft: wp('2%')
             
            }}
          />     

          <View style={{ position: "absolute", bottom: 0, padding: hp("1%") }}>
            <View style={{ flexDirection: "row" }}>
              <Icon
                name="location-outline"
                size={20}
                color="#ff6200"
                style={{ marginLeft: 10, position: "relative", top: 4 }}
              />
              <Text
                style={{
                  fontSize: 22,
                  color: "white",
                  fontWeight: "normal",
                  marginBottom: "2%",
                  marginHorizontal: 10,
                }}
              >
                Cuenca
              </Text>
            </View>
            <Text
              style={{
                fontSize: 14,
                color: "white",
                fontWeight: "normal",
                marginBottom: 10,
                opacity: 0.9,
                marginLeft: 10,
              }}
            >
              {cuenca}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
    </SafeAreaView>
  
    
);
  
}

    

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      width: wp("100%"),
      height: responsiveScreenHeight(25),
    },
  
    searchContainer: {
      paddingTop: hp("4%"),
      paddingLeft: wp("5%"),
    },
    
    userGreet: {
      fontSize: responsiveScreenFontSize(6),
      fontWeight: "bold",
      color: "white",
      borderTopEndRadius: 5,
      
    },
    
    userText: {
      fontSize: responsiveScreenFontSize(2),
      fontWeight: "normal",
      color: "white",
    },
    searchBox: {
      marginTop: hp("3%"),
      backgroundColor: "#fff",
      paddingLeft: hp("2%"),
      padding: hp("1%"),
      borderTopRightRadius: 40,
      borderBottomRightRadius: 40,
      width: wp("75%"),
    },
  
    imageLocationIcon: {
      position: "absolute",
      left: hp("1%"),
      bottom: hp("1%"),
    },
    imageText: {
      position: "absolute",
      bottom: "2%",
      left: "20%",
      fontSize: hp("2.5%"),
      color: "white",
    },
  });

export default Home;