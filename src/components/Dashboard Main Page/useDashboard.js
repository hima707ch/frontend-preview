import { useState, useEffect } from 'react';

export const useDashboard = () => {
  const [orderStats, setOrderStats] = useState({ total: 0, revenue: 0 });
  const [stockAlerts, setStockAlerts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [ordersResponse, productsResponse] = await Promise.all([
          fetch('/api/orders', {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
          }),
          fetch('/api/products', {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
          })
        ]);

        if (!ordersResponse.ok || !productsResponse.ok) {
          throw new Error('Failed to fetch dashboard data');
        }

        const orders = await ordersResponse.json();
        const products = await productsResponse.json();

        setOrderStats({
          total: orders.length,
          revenue: orders.reduce((acc, order) => acc + order.totalAmount, 0)
        });

        setStockAlerts(products.filter(product => product.stock < 10));
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  return { orderStats, stockAlerts, isLoading, error };
};