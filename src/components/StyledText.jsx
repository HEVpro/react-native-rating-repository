import React from 'react'
import {Text, View, StyleSheet} from "react-native";
import theme from '../theme'

const styles = StyleSheet.create({
    text: {
        fontSize: theme.fontSize.body,
        color: theme.colors.textPrimary,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeight.normal
    },
    colorPrimary: {
        color: theme.colors.textPrimary
    },
    colorSecondary: {
        color: theme.colors.textSecondary
    },
    bold: {
        fontWeight: theme.fontWeight.bold
    },
    subheading: {
        fontSize: theme.fontSize.subheading
    },
    textAlignCenter: {
        textAlign: "center"
    }
})
export default function StyledText ({children, color, fontSize, fontWeight, style, align, ...restOfProps}){
    const textStyles = [
        styles.text,
        color === 'primary' && styles.colorPrimary,
        color === 'secondary' && styles.colorSecondary,
        fontSize === 'subheading' && styles.subheading,
        fontWeight === 'bold' && styles.bold,
        align === 'center' && styles.textAlignCenter,
        style
    ]
    return(
        <Text style={textStyles} {...restOfProps}>
            {children}
        </Text>
    )
}