import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Real-time Sales Tracking",
    Svg: require("@site/static/img/sales_today.svg").default,
    description: (
      <>
        Monitor your store’s performance instantly with real-time sales data.
        Track today’s revenue, number of orders, and overall activity directly
        from the dashboard.
      </>
    ),
  },
  {
    title: "Easy Order Management",
    Svg: require("@site/static/img/orders.svg").default,
    description: (
      <>
        View and manage all orders in one place. Quickly process transactions,
        check order details, and keep your sales workflow organized and
        efficient.
      </>
    ),
  },
  {
    title: "Smart Inventory",
    Svg: require("@site/static/img/inventory.svg").default,
    description: (
      <>
        Stay on top of your stock levels with smart inventory tracking. Easily
        monitor products, update quantities, and avoid running out of essential
        items.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
