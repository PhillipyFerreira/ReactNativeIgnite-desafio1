import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    padding: 12,
    alignItems: 'center'
  },
  eventTitle: {
    flexDirection: 'row',
    marginTop: 36
  },
  logo: {
    width: 150,
    resizeMode: 'contain'
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: '#262626',
    borderRadius: 5,
    color: '#F2F2F2',
    padding: 16,
    fontSize: 16,
    marginRight: 12
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#31CF67',
    alignItems: 'center',
    justifyContent: 'center'
  },
  addButtonImage:{
    height: 56,
    resizeMode: 'contain'
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 42
  },
  listHeader: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 24
  },
  listHeaderCreated:{
    flexDirection: 'row'
  },
  listHeaderFinished:{
    marginLeft: 'auto',
    flexDirection: 'row',
  },
  listHeaderTextCreated:{
    color: '#4EA8DE',
    fontSize: 14,
    fontWeight: 'bold',
    paddingRight: 7
  },
  listHeaderTextFinished:{
    color: '#8284FA',
    fontSize: 14,
    fontWeight: 'bold',
    paddingRight: 7
  },
  countText:{
    textAlign: 'center',
    color: '#D9D9D9'
  },
  countStyle: {
    width: 25,
    backgroundColor: '#333333',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#333333',
  },
  listEmptyTextBold:{
    color: '#808080',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center'
  },
  listEmptyText: {
    color: '#808080',
    fontSize: 16,
    textAlign: 'center'
  },
  listEmpty: {
    width: '100%'
  },
  clipboardLogo: {
    resizeMode: 'center',
    width: '100%'
  }
})