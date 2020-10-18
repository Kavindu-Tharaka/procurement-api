const supplierController = require('../controllers/supplierController');

describe('getSupplier function', () => {
    it('should return success status', () => {
        const req = {
            params: { 
                id: '5f86e7dfb246be3f78276748'
            }
        }
        const res = {}
        const result = supplierController.getSupplier(req, res);
        expect(result).resolves.toHaveProperty('status', 'success');

    });

    it('should return falid status if id == null', () => {
        const req = {
            params: { 
                id: null
            }
        }
        const res = {}
        const result = supplierController.getSupplier(req, res);
        expect(result).resolves.toHaveProperty('status', 'failed');

    })
});

describe('deleteSupplier function', () => {
    it('should return success status', () => {
        const result = supplierController.deleteSupplier({req: {params: {id: '5f86e7dfb246be3f78276748'}}}, {});
        expect(result).resolves.toHaveProperty('status', 'success');
    });

    it('should return falid status if id == null', () => {
        const result = supplierController.deleteSupplier({req: {params: {id: null}}}, {});
        expect(result).resolves.toHaveProperty('status', 'failed');
    })
});

describe('createSupplier function', () => {
    it('should return success status', () => {
        const req = {
            supplierName: "GIH Suppliers",
            address: "No. 221, Pagoda, Nugegoda",
            email: "ymail@ymail.com"
        };
        const res = {};
        const result = supplierController.getSupplier(req, res);
        expect(result).resolves.toHaveProperty('status', 'success');

    });

    it('should return falid status if req == null', () => {
        const req = null;
        const res = {};
        const result = supplierController.getSupplier(req, res);
        expect(result).resolves.toHaveProperty('status', 'failed');
    })
});