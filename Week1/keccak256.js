from base64 import encode
import sha3
import os

print("Keccak 256 di python\n")
namahewan = input("Masukan Nama Hewan: ")
os.system('CLS')
print("Nama Hewan: \n", namahewan)
encoded = namahewan.encode()
obj_encoded = sha3.keccak_256(encoded)
print("Nama hewan sesudah hash Keccak 256: \n", obj_encoded.hexdigest())
