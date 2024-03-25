import { StyleSheet } from "react-native";

export const tempStyle = StyleSheet.create({
  container: {
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  workspace: {
    minHeight: 490,
    minWidth: 350,
    width: "85%",
    justifyContent: "center",
    alignItems: "center",
    rowGap: 55,
  },
  textInputContainer: {
    width: "100%",
    flexDirection: "row",
    borderRadius: 12,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  textInput: {
    color: "#333",
    padding: 15,
    fontWeight: "500",
  },
  textInputLabel: {
    fontSize: 25,
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
    fontSize: 65,
    color: "white",
    fontWeight: "600",
  },
});
