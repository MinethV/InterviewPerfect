from rake_nltk import Rake
import re

def detect_filler_words(text):
    r = Rake()
    r.extract_keywords_from_text(text)
    keywords = r.get_ranked_phrases()

    filler_words = {"um", "uh", "uhh", "umm", "like", "you know", "so", "well", "basically", "actually", "literally"}

    detected_fillers = [word for word in keywords if re.sub(r'[^\w\s]', '', word.lower()) in filler_words]

    return detected_fillers

text = "um um SDLC models include Waterfall, Agile, Iterative, Spiral, and V-Model. Waterfall is linear and best for well-defined projects, while Agile is iterative and suited for dynamic projects. Iterative combines elements of both, Spiral is risk-driven, and V-Model is used for verification and validation."

filler_words_detected = detect_filler_words(text)

if filler_words_detected:
    print("Filler words detected:")
    for filler in filler_words_detected:
        print(filler)
else:
    print("No filler words detected.")



# r.extract_keywords_from_text(text)

# for keyword in r.get_ranked_phrases():
#     print(keyword)