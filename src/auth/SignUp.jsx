// import React, { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "./AuthProvider";
// import {
//   TextField,
//   Button,
//   Box,
//   Typography,
//   Container,
//   Grid,
//   Link
// } from "@mui/material";

// const SignUp = () => {
//   const navigate = useNavigate();
//   const { signup } = useContext(AuthContext);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       await signup(email, password);
//       navigate("/");
//     } catch (error) {
//       alert(error);
//     }
//   };

//   return (
//     <Container maxWidth="xs">
//       <Box
//         display="flex"
//         flexDirection="column"
//         alignItems="center"
//         justifyContent="center"
//         style={{ minHeight: "100vh" }}
//       >
//         <Typography variant="h4" component="h1" gutterBottom>
//           新規登録
//         </Typography>
//         <form onSubmit={handleSubmit} style={{ width: "300px" }}>
//           <TextField
//             label="メールアドレス"
//             fullWidth
//             margin="normal"
//             name="email"
//             type="email"
//             placeholder="メールアドレスを入力"
//             onChange={(event) => setEmail(event.target.value)}
//           />
//           <TextField
//             label="パスワード"
//             fullWidth
//             margin="normal"
//             name="password"
//             type="password"
//             placeholder="パスワードを入力"
//             onChange={(event) => setPassword(event.target.value)}
//           />
//           <Button
//             type="submit"
//             color="primary"
//             variant="contained"
//             margin="normal"
//             fullWidth
//             sx={{ mt: 3, mb: 2 }}
//           >
//             登録する
//           </Button>

//           <Grid container justifyContent="space-between">
//             <Grid item>
//               <Link href="#" variant="body2"></Link>
//             </Grid>
//             <Grid item>
//               <Link href="/login" variant="body2">
//                 ログイン
//               </Link>
//             </Grid>
//           </Grid>
//         </form>
//       </Box>
//     </Container>
//   );
// };

// export default SignUp;
