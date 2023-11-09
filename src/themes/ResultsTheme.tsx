import { StyleSheet } from "react-native";

export const resultStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#027373'
  },
  title: {
    fontSize: 19,
    textAlign: 'center',
    marginVertical: 20,
    color: '#F2E7DC'
  },
  buttonContainer: {
    marginTop: 20,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#F2E7DC',
    padding: 12,
    borderRadius: 10,
    marginBottom: 30,
    borderWidth: 2,
  },
  textButton: {
    color: '#0D0D0D'
  },
  listContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  departmentName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
    color: '#F2E7DC'
  },
  departmentCount: {
    fontSize: 16,
    color: '#F2E7DC',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomColor: '#F2E7DC',
    borderBottomWidth: 1,
  },

});