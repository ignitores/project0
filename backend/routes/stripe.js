const stripe = require('stripe')('sk_test_51MKcrsSJgbQbqjEPfT5tNiLDD1ngz1xHLaHHveJ67ZHrLzlJFZrtFjUJ9HuvV3uq48LK1Ju2BWRET87JjpMlt2RH00X7De4HOo');
const express = require('express');
const router = express.Router();

router.post('/create-checkout-session', async (req, res) => {

    const cake = req.body.value;
    // console.log(cake);
    const line_items = [
        {
            price_data: {
                currency: 'inr',
                product_data: { name: cake.name, images: [cake.images[0]] },
                unit_amount: cake.Amount * 100,
                tax_behavior: 'exclusive',
                metadata: {
                    id: cake.id
                }

            },
            // adjustable_quantity: { enabled: true, minimum: 1, maximum: 10 },
            quantity: cake.Quantity,
        }
    ];


    const params = {
        submit_type: 'pay',
        mode: 'payment',
        payment_method_types: ['card'],
        billing_address_collection: 'auto',
        shipping_address_collection: { allowed_countries: ['IN'] },

        line_items,
        phone_number_collection: {
            enabled: true,
        },

        success_url: `http://localhost:3000/payment_success`,
        cancel_url: `http://localhost:3000/`,
    }
    const session = await stripe.checkout.sessions.create(params);

    // res.redirect(303, session.url);
    res.send({ url: session.url });
});

module.exports = router;