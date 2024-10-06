import styles from './about-us.module.css'

export const AboutUs = () => {
    return (
        <div className={styles['about-us-main-container']}>
            <h1 className={styles['about-us-header']}>About Joshua Shipping Logistics</h1>
            <div className={styles['about-us-wrapper']}>
                <div className={styles['about-us-container']}>
                    <div className={styles['about-us-info']}>
                        <div className={styles['about-us-info-title-style']}>History</div>
                        <div className={styles['about-us-info-text-style']}>Joshua Shipping Logistics was founded in 2010 by Joshua Martinez, who aimed to address the logistical challenges of transporting fresh food and produce from the United States to Puerto Rico. Having grown up in a family that operated a small grocery store, Joshua saw firsthand the difficulties local businesses faced in sourcing quality goods. He started with a single refrigerated truck and a commitment to reliable service, quickly building relationships with farmers and suppliers across the U.S. As demand grew, Joshua expanded his fleet and established a robust network, ensuring timely deliveries of fresh produce to markets and restaurants throughout Puerto Rico. Today, Joshua Shipping Logistics is recognized for its dedication to quality, efficiency, and support for local economies.</div>
                    </div>
                    <img src="photos/port.png" alt="port"/>
                </div>
                <div className={styles['about-us-container']}>
                    <div className={styles['about-us-info']}>
                        <div className={styles['about-us-info-title-style']}>What We Do</div>
                        <div className={styles['about-us-info-text-style']}>We specialize in the transportation of fresh food and produce from the United States to Puerto Rico, offering a comprehensive range of services tailored to meet the needs of local businesses. We provide temperature-controlled shipping solutions to ensure that perishable items arrive in optimal condition, along with warehousing services that facilitate efficient inventory management. Additionally, we offer inventory counting services, helping clients keep accurate track of stock levels. We also provide customs brokerage assistance to ensure compliance with regulations and smooth clearance processes. Our dedicated customer service team works closely with clients to customize delivery schedules and streamline logistics, making us a reliable partner for grocery stores, restaurants, and markets across Puerto Rico.</div>
                    </div>
                    <img src="photos/forklift.png" alt="port"/>
                </div>
                <div className={styles['about-us-container']}>
                    <div className={styles['about-us-info']}>
                        <div className={styles['about-us-info-title-style']}>Why We Do It</div>
                        <div className={styles['about-us-info-text-style']}>At Joshua Shipping Logistics, we are driven by a mission to enhance food accessibility and support local businesses in Puerto Rico. Recognizing the unique challenges faced by the island, where fresh produce can often be hard to source, we are committed to providing reliable and efficient transportation solutions. By bridging the gap between U.S. suppliers and Puerto Rican markets, we not only ensures that local grocery stores and restaurants have access to high-quality goods, but also helps bolster the local economy. Our team believes that everyone deserves fresh, nutritious food, and they strive to make that a reality through their dedicated service and innovative logistics solutions.</div>
                    </div>
                    <img src="photos/employees.png" alt="port"/>
                </div>
            </div>
        </div>
    )
}