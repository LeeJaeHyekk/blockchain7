response = openai.Image.create(
  (prompt =
    "A curious and playful unicorn with a pastel apricot background and cartoonish style."),
  (n = 1),
  (size = "1024x1024")
);
image_url = response["data"][0]["url"];
