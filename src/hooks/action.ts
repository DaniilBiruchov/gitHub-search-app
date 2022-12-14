import { githubAction } from './../store/github/github.slice';
import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"

const actions = {
    ...githubAction
}

export const useAction = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}