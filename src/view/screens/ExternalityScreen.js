import React from 'react';
import { View, SafeAreaView, Image, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import plants from '../../consts/plants';

const externalityList = ['Environmental Pollution', 'Child Labour']
const externalityImageLocation = ['../../assets/environmental_pollution.jpg', '../../assets/child_labour.jpg']

const externalityImages = [require('../../assets/environmental_pollution.jpg'), require('../../assets/child_labour.jpg')]
const externalityDescription = [
  "The market impacts of outdoor air pollution, which include impacts on labour productivity, health expenditures and agricultural crop yields, are projected to lead to global economic costs that gradually increase to 1% of global GDP by 2060.",

  "1. By interfering with the accumulation of human capital, child labour reduces the adulthood labour market productivity of child workers, thereby discouraging economic growth and development. 2. By depressing adult wages, child labour results in households becoming more reliant on children as income earning assets."
]

// Screen that displays externality details
const ExternalityScreen = ({ navigation, route }) => {
  const plant = route.params;

  let currentExternality = plant.name;
  console.log(currentExternality);

  let index = externalityList.indexOf(currentExternality);
  console.log(index);
  console.log(plant.img, "image location");
  console.log(externalityImages[0]);

  let img = externalityImages[0];
  if (index >= 0) {
    img = externalityImages[index];
  }

  let description = externalityDescription[0];
  if (index >= 0) {
    description = externalityDescription[index];
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <ScrollView>
        <View style={style.header}>
          <Icon name="arrow-back" size={28} onPress={() => navigation.goBack()} />
          <Icon name="shopping-cart" size={28} />
        </View>
        <View style={style.imageContainer}>
          <Image source={img} style={{ resizeMode: 'contain', flex: 1 }} />
        </View>
        <View style={style.detailsContainer}>
          <View
            style={{
              marginLeft: 20,
              flexDirection: 'row',
              alignItems: 'flex-end',
            }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Externality</Text>
          </View>
          <View
            style={{
              marginLeft: 20,
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{plant.name}</Text>
            <View style={style.salesPriceTag}>
              <Text
                style={{
                  marginLeft: 15,
                  color: COLORS.white,
                  fontWeight: 'bold',
                  fontSize: 16,
                }}>
                ${plant.price}
              </Text>
            </View>
            <View style={style.priceTag}>
              <Text
                style={{
                  marginLeft: 15,
                  color: COLORS.white,
                  fontWeight: 'bold',
                  fontSize: 16,
                }}>
                ${plant.truePrice}
              </Text>
            </View>
          </View>

          <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>About</Text>
            <Text
              style={{
                color: 'grey',
                fontSize: 16,
                lineHeight: 22,
                marginTop: 10,
              }}>
              {description}
            </Text>

            <View
              style={{
                marginTop: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View style={style.borderBtn}>
                  <Text style={style.borderBtnText}>-</Text>
                </View>
                <Text
                  style={{
                    fontSize: 20,
                    marginHorizontal: 10,
                    fontWeight: 'bold',
                  }}>
                  1
                </Text>
                <View style={style.borderBtn}>
                  <Text style={style.borderBtnText}>+</Text>
                </View>
              </View>

              <View style={style.buyBtn}>
                <Text
                  style={{ color: COLORS.white, fontSize: 18, fontWeight: 'bold' }}>
                  Buy
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    flex: 0.45,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    flex: 0.55,
    backgroundColor: COLORS.light,
    marginHorizontal: 7,
    marginBottom: 7,
    borderRadius: 20,
    marginTop: 30,
    paddingTop: 30,
  },
  line: {
    width: 25,
    height: 2,
    backgroundColor: COLORS.dark,
    marginBottom: 5,
    marginRight: 3,
  },
  borderBtn: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 40,
  },
  borderBtnText: { fontWeight: 'bold', fontSize: 28 },
  buyBtn: {
    width: 130,
    height: 50,
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  priceTag: {
    backgroundColor: COLORS.green,
    width: 80,
    height: 40,
    justifyContent: 'center',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
  salesPriceTag: {
    backgroundColor: COLORS.red,
    width: 80,
    height: 40,
    justifyContent: 'center',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
});

export default ExternalityScreen;
