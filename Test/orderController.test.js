const orderController = require('../controllers/orderController');

describe('getOrder', () => {
    it('expected to return success', () => {
        const req = {
            params: { 
                id: '5f8b19e7761b420017b91cc2'
            }
        }
        const res = {}
        const result = orderController.getOrder(req, res);
        expect(result).resolves.toHaveProperty('status', 'success');

    });

    it('expected return fail since id is null', () => {
        const req = {
            params: { 
                id: null
            }
        }
        const res = {}
        const result = orderController.getOrder(req, res);
        expect(result).resolves.toHaveProperty('status', 'failed');

    })
});

describe('deleteOrder', () => {
    it('expected to return status success', () => {
        const result = orderController.deleteOrder({req: {params: {id: '5f8b19e7761b420017b91cc2'}}}, {});
        expect(result).resolves.toHaveProperty('status', 'success');
    });

    it('expected to return failed status for null id value', () => {
        const result = orderController.deleteOrder({req: {params: {id: null}}}, {});
        expect(result).resolves.toHaveProperty('status', 'failed');
    })
});

describe('createOrder', () => {
    it('should return success status', () => {
        const req = {
            orderName: "GIH Orders",
            address: "No. 221, Pagoda, Nugegoda",
            email: "ymail@ymail.com"
        };
        const res = {};
        const result = orderController.getOrder(req, res);
        expect(result).resolves.toHaveProperty('status', 'success');

    });

    it('should return falid status if req == null', () => {
        const req = null;
        const res = {};
        const result = orderController.getOrder(req, res);
        expect(result).resolves.toHaveProperty('status', 'failed');
    })
});