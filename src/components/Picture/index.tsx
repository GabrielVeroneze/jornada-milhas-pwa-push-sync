import * as Styled from './styled'

interface PictureProps {
    srcMobile: string
    srcTablet: string
    srcDesktop: string
    alt: string
}

const Picture = ({ srcMobile, srcTablet, srcDesktop, alt }: PictureProps) => {
    return (
        <Styled.Picture>
            <source media="(max-width: 360px)" srcSet={srcMobile} />
            <source media="(max-width: 768px)" srcSet={srcTablet} />
            <img src={srcDesktop} alt={alt} />
        </Styled.Picture>
    )
}

export default Picture
