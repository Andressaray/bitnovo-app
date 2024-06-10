import React from 'react';
import {Layout} from '@ui/components';
import useOrderStore from '@ui/store/order';
import usePaymentStore from '@ui/store/payment';
import formatMoney from '@ui/utils/formats/formatMoney';
import useCurrencyStore from '@ui/store/currency';
import {Badge, QrContent} from './ui/components';
import styles from './style';

const Qr = () => {
  const {order} = useOrderStore();
  const {currency} = useCurrencyStore();
  const {payment} = usePaymentStore();
  return (
    <Layout layoutStyle={styles.container}>
      <Badge />
      <QrContent
        amount={formatMoney(payment?.amount ?? 0)}
        prefix={currency?.prefix ?? ''}
        suffix={currency?.suffix ?? ''}
        url={order?.web_url ?? ''}
      />
    </Layout>
  );
};

export default Qr;
