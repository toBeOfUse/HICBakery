import Image from "next/image"
import styles from "../styles/footer.module.css"

export default function Footer() {
    return (
        <div id={styles.FooterContainer}>
            <p> © 2023 Cupcake Corner. All rights reserved. | Website lovingly baked by Cupcake Corner. | Indulge in the sweet life.</p>
            <div id={styles.SocialInfoContainer}>
                <Image id={styles.PhoneIcon} width="10" height="10" src="/phone_icon.png" />
                <p id={styles.PhoneNumber}>330-123-4567</p>
                <Image id={styles.InstagramIcon} width="15" height="15" src="/instagram_logo.png" />
                <Image id={styles.FacebookIcon} width="10" height="15" src="/facebook_logo.png" />
            </div>
        </div>
    )
}
