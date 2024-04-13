import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 30,
    flexGrow: 1,
    alignItems: "center",
    paddingVertical: 20,
    marginTop: 20,
    width: "95%",
  },
  title: {
    fontWeight: "bold",
    color: "black",
    marginBottom: 15,
    fontSize: 27,
    marginTop: 5,
    marginHorizontal: 5,
  },
  imageContainer: {
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 350,
    borderRadius: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "black",
  },
  favoritesButton: {
    alignSelf: "flex-end",
    marginRight: 0,
    marginTop: 5,
  },
  descriptionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginLeft: 10,
    marginRight: 20,
    alignItems: "center",
  },
  descriptionText: {
    fontSize: 16,
    marginLeft: 10,
    marginRight: 10,
    color: "black",
  },
  detailsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginLeft: 10,
    marginRight: 20,
    alignItems: "center",
  },
  detailsText: {
    fontSize: 16,
    marginLeft: 10,
    marginRight: 20,
    color: "black",
  },
  textBold: {
    fontWeight: "bold",
    textDecorationLine: "underline",
    color: "black",
  },
  welcomeContainer: {
    backgroundColor: "#E6999E",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeInnerContainer: {
    alignItems: "center",
  },
  welcomeImage: {
    width: 200,
    height: 200,
  },
  welcomeText: {
    marginTop: 20,
    color: "black",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  loginButtonContainer: {
    marginTop: 20,
  },
  artworkListLoadingContainer: {
    flex: 1, 
    justifyContent: "center"
  },
  artworkListLoadingMessage:{
    fontWeight: "bold",
    fontSize:20,
    textAlign: "center",
    paddingBottom:10,
    color:"#E6999E"
  },
  flatListContainer : {
    flex: 1,
    backgroundColor:"#E6999E",
    paddingBottom: 100
  },
  flatListStyle: {
    width: '95%',
    marginVertical: 10,
    alignItems: 'center',
    backgroundColor: '#ffff',
    borderRadius: 10,
    padding: 10,
    elevation: 5,
    marginLeft: 10,
    opacity: 0.95,
    position: "relative"
  },
  flatListTitle: {
    fontWeight: 'bold', 
    marginBottom: 9, 
    fontSize: 18, 
    color: 'black',
    textAlign:"center"
  },
  flatListImageContainerDetails: {
    flexDirection: 'row', 
    alignItems: 'flex-start'
  },
  flatListImageDetails: {
    width: 100, 
    height: 100,
    borderRadius: 10, 
    borderColor: 'black', 
    borderWidth: 1
  },
  flatListDescriptiveText: {
    fontSize: 14, 
    textAlignVertical: 'top', 
    flex: 1, 
    color: '#231F1F'
  }
});

export default styles;