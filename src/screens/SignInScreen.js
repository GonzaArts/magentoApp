import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import styles from './Styles/SignInScreenStyles';

const signInValidationSchema = Yup.object().shape({
  username: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
});

const SignInScreen = () => {
  return (
    <View style={styles.signInContainer}>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={values => {
          // ... lógica de inicio de sesión ...
        }}
        validationSchema={signInValidationSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            {/* ... Campos de texto y botón de inicio de sesión ... */}
          </View>
        )}
      </Formik>
    </View>
  );
};

export default SignInScreen;
