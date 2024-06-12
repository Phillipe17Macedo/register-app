import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: 'column',
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 31,
    fontWeight: "bold",
    fontVariant: ["small-caps"],
    marginTop: 60,
    marginBottom: 25,
  },
  containertextInput: {
    width: '90%',
    height: 180,
    borderRadius: 10,
    //backgroundColor: 'red',
    justifyContent: 'space-between',
    flexDirection: 'column',
    marginTop: 10
  },
  textInput: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    fontWeight: 'bold',
    color: '#012030',
    fontSize: 16,
    backgroundColor: '#fff',
    elevation: 3,
  },
  containerButton: {
    backgroundColor: '#042940',
    width: 200,
    height: 50,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80,
    elevation: 5
  },
  textoButton: {
    fontSize: 21,
    fontWeight: 'bold',
    fontVariant: ['small-caps'],
    color: '#DBF227'
  },
  conatinerModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold'
  },
  closeButton: {
    backgroundColor: '#DBF227',
    padding: 12,
    borderRadius: 21,
    elevation: 3,
    marginTop: 10,
  },
  closeButtonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18
  },
});
