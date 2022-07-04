priceBook = 24.20
desc = 0.40
priceDesc = priceBook - (priceBook * desc)
quantityBook = 60

transport = 3 + (quantityBook - 1) * 0.75

totalPrice = priceDesc * quantityBook + transport

print(f'Total: R$ {totalPrice:.2f}')