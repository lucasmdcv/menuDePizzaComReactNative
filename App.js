import {
  ScrollView,
  StyleSheet,
  Image,
  Text,
  View,
  Button,
  Alert,
} from "react-native";
import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";

export default class App extends Component {
  render() {

    return (
      <NavigationContainer>
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.logo}>Menu de Pizzas</Text>
            <Text style={styles.p}> selecione uma pizza!</Text>
            <View>
              <View style={styles.box}>
                <Text style={styles.pizza}>
                  <Text> Pizza de Calabresa</Text>
                </Text>
                <Image
                  source={require("./src/pizzas/Pizza de calabresa.jpeg")}
                  style={styles.img}
                />
                <Text style={styles.p}></Text>
                <Text style={styles.valor}> R$25,00</Text>
                <Button
                  title="selecionar"
                  style={styles.botao}
                  onPress={() => Alert.alert("Pizza Selecionada Calabresa")}
                />
              </View>

              <View style={styles.box}>
                <Text style={styles.pizza}>
                  <Text> Pizza de Portuguesa</Text>
                </Text>
                <Image
                  source={require("./src/pizzas/pizza de portuguesa.jpeg")}
                  style={styles.img}
                />
                <Text style={styles.valor}> R$25,00</Text>
                <Button
                  title="selecionar"
                  style={styles.botao}
                  onPress={() => Alert.alert("Pizza Selecionada Portuguesa")}
                />
              </View>

              <View style={styles.box}>
                <Text style={styles.pizza}>
                  <Text> Pizza moda da casa </Text>
                </Text>
                <Image
                  source={require("./src/pizzas/Pizza à Moda da Casa.jpeg")}
                  style={styles.img}
                />
                <Text style={styles.valor}> R$25,00</Text>
                <Button
                  title="selecionar"
                  style={styles.botao}
                  onPress={() => Alert.alert("Pizza Selecionada moda da casa ")}
                />
              </View>

              <View style={styles.box}>
                <Text style={styles.pizza}>
                  <Text> Pizza de Frango</Text>
                </Text>
                <Image
                  source={require("./src/pizzas/pizza de Frango.jpeg")}
                  style={styles.img}
                />
                <Text style={styles.valor}> R$25,00</Text>
                <Button
                  title="selecionar"
                  style={styles.botao}
                  onPress={() => Alert.alert("Pizza Selecionada de Frango")}
                />
              </View>

              <View style={styles.box}>
                <Text style={styles.pizza}>
                  <Text> Pizza de Banana</Text>
                </Text>
                <Image
                  source={require("./src/pizzas/pizza de Banana.jpeg")}
                  style={styles.img}
                />
                <Text style={styles.valor}> R$25,00</Text>
                <Button
                  title="selecionar"
                  style={styles.botao}
                  onPress={() => Alert.alert("Pizza Selecionada de Banana")}
                />
              </View>

              <View style={styles.box}>
                <Text style={styles.pizza}>
                  <Text> Pizza de Camarão</Text>
                </Text>
                <Image
                  source={require("./src/pizzas/pizza de Camarão.jpeg")}
                  style={styles.img}
                />
                <Text style={styles.valor}> R$25,00</Text>
                <Button
                  title="selecionar"
                  style={styles.botao}
                  onPress={() => Alert.alert("Pizza Selecionada de Camarão")}
                />
              </View>
            </View>
          </View>
        </ScrollView>

      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#285",
    alignItems: "center",
  },
  logo: {
    marginTop: 60,
    color: "#ffffff",
    fontSize: 25,
    textDecorationColor: "Underline",
    fontWeight: "bold",
  },
  pizza: {
    marginTop: 60,
    margin: 10,
    color: "#ffffff",
    alignItems: "center",
    justifyContent:"center",
    marginLeft:22,
    fontSize: 20,
  },
  valor: {
    marginTop: 10,
    margin: 10,
    color: "#ffffff",
    alignItems: "center",
    alignContent: "center",
    fontSize: 20,
    marginLeft: 70,
  },

  box: {
    borderColor: "#fff",
    borderRadius: 15,
    borderWidth: 5,
    margin: 10,
    backgroundColor: "#030",
  },

  img: {
    width: 240,
    height: 210,
    alignItems: "center",
  },
  p: {
    color: "#fff",
  },
  botao: {
    backgroundColor: "#FFC936",
  },
});
