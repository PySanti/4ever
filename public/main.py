import os
i = 0
for img in os.listdir("./imgs"):
    os.rename(img, f"{i}.jpg")

