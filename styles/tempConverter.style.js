import { StyleSheet } from "react-native";

export const tempStyle = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    padding: 20,
  },
  workspace: {
    minHeight: 490,
    minWidth: 350,
    justifyContent: "center",
    alignItems: "center",
    rowGap: 55,
  },
  textInputContainer: {
    flexDirection: "row",
    width: "100%",
    alignSelf: "stretch", // Pour override le `alignItems` du parent
    borderRadius: 12,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  textInput: {
    color: "#111",
    padding: 16,
    fontWeight: "500",
  },
  textInputLabel: {
    fontSize: 20,
    color: "#111",
  },
  buttonApp: {
    backgroundColor: "#111",
    paddingVertical: 20,
    paddingHorizontal: 40,
    padding: "10 20",
    borderRadius: 99,
    text: {
      fontSize: 20,
      color: "#fff",
    },
  },
  textOutput: {
    fontSize: 75,
    color: "white",
    fontWeight: "500",
  },
});
