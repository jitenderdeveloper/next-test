"use client"
export function getToken() {
  let user = JSON.parse(localStorage.getItem("user_data"));
  if (user) {
    return user?.token;
  } else {
    return "73j93js857fh589djsjaksj384940DJ34849Djjd";
  }
}
