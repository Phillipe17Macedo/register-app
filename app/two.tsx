import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Modal,
} from "react-native";
import { styles } from "@/styles/Two/styles";

export default function TabTwoScreen() {
  const [nomeInput, setNomeInput] = useState("");
  const [telefoneInput, setTelefoneInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [modalVisivel, setModalVisivel] = useState(false);

  const handlerOnPress = () => {
    console.log("Pressionado !");
    setModalVisivel(true);
  };

  const handlerFecharModal = () => {
    setModalVisivel(false);
  };

  async function handlerOnLongPress() {
    Alert.alert("Botão pressionado");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Preencha os Dados</Text>
      <View style={[styles.containertextInput]}>
        <TextInput
          placeholder="Nome Completo"
          style={[styles.textInput]}
          keyboardType="default"
          value={nomeInput}
          onChangeText={setNomeInput}
        />
        <TextInput
          placeholder="Telefone"
          style={[styles.textInput]}
          keyboardType="number-pad"
          value={telefoneInput}
          onChangeText={setTelefoneInput}
        />
        <TextInput
          placeholder="Email"
          style={[styles.textInput]}
          keyboardType="email-address"
          value={emailInput}
          onChangeText={setEmailInput}
        />
      </View>
      <TouchableOpacity
        style={[styles.containerButton]}
        onPress={handlerOnPress}
        onLongPress={handlerOnLongPress}
      >
        <Text style={[styles.textoButton]}>PRESSIONE !</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisivel}
        onRequestClose={handlerFecharModal}
      >
        <View style={styles.conatinerModal}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>{nomeInput}</Text>
            <Text style={styles.modalText}>{telefoneInput}</Text>
            <Text style={styles.modalText}>{emailInput}</Text>
            <TouchableOpacity
              onPress={handlerFecharModal}
              style={styles.closeButton}
            >
              <Text style={styles.closeButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
