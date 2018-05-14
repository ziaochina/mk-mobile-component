import React from 'react'
import { LocaleProvider } from 'antd-mobile'

export default function localeWrapper(lang, child){
    return <LocaleProvider>{child}</LocaleProvider>
}