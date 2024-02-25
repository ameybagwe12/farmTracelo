// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract PT {
    struct Product {
        string prod_id;
        string name;
        string date;
        uint bought_weight;
        address seller;
        // uint sold_weight;
        uint price;
        string prev;
        bool isConsumed;
    }

    mapping(string => Product) public transactions;
    string[] public list;

    function addProductByFarmer(
        string calldata id,
        string calldata _name,
        string calldata _date,
        uint _bought_weight,
        // uint _sold_weight,
        uint price
    ) public {
        Product memory product = Product(
            id,
            _name,
            _date,
            _bought_weight,
            msg.sender,
            // _sold_weight,
            price,
            "",
            false
        );
        transactions[id] = product;
        list.push(id);
    }

    function addProductByTrader(
        string calldata _id,
        string calldata _date,
        uint weight_to_buy,
        uint price,
        string calldata _prev
    ) public {
        Product memory prevProduct = getProduct(_prev);
        require(
            bytes(prevProduct.name).length > 0,
            "Previous product must exist"
        );
        require(prevProduct.bought_weight >= weight_to_buy);
        if (prevProduct.bought_weight == weight_to_buy) {
            transactions[_prev].bought_weight = 0;
            transactions[_prev].isConsumed = true;
        } else {
            transactions[_prev].bought_weight -= weight_to_buy;
            transactions[_prev].date = _date;
        }

        Product memory product = Product(
            _id,
            prevProduct.name,
            // prevProduct.bought_weight,
            _date,
            weight_to_buy,
            msg.sender,
            price,
            _prev,
            false
        );

        transactions[_id] = product;
        list.push(_id);
    }

    function getProduct(
        string memory _id
    ) public view returns (Product memory) {
        return transactions[_id];
        // return products[_id];
    }

    function getAllProducts() public view returns (Product[] memory) {
        uint j = 0;
        for (uint i = 0; i < list.length; i++) {
            if (!transactions[list[i]].isConsumed) {
                j++;
            }
        }
        Product[] memory output = new Product[](j);
        j = 0;
        for (uint i = 0; i < list.length; i++) {
            if (!transactions[list[i]].isConsumed) {
                output[j] = transactions[list[i]];
                j++;
            }
        }

        return output;
    }

    function getSellerProduct() public view returns (Product[] memory) {
        Product[] memory results = new Product[](list.length);
        uint j = 0;
        for (uint i = 0; i < list.length; i++) {
            if (transactions[list[i]].seller == msg.sender) {
                results[j] = transactions[list[i]];
                j = j + 1;
            }
        }
        return results;
    }
}
