import { ToastContainer } from 'react-toastify'
import styled from 'styled-components'

const StyledToastContainer = styled(ToastContainer)`
    .Toastify-toast {
        font-size: 16px;
        font-weight: 600;

        &-theme--light {
            background: #ffffff;
            color: #5a189a;
        }
    }
`

export default StyledToastContainer
