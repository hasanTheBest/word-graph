### Datamuse word api

Word finding query engine for developers. free to use, supports http and https

base url: https://api.datamuse.com/words

Query Parameters:

ml Means like constraint: require that the results have a meaning related to this string value, which can be any word or sequence of words. (This is effectively the reverse dictionary feature of OneLook.)

sl Sounds like constraint: require that the results are pronounced similarly to this string of characters. (If the string of characters doesn't have a known pronunciation, the system will make its best guess using a text-to-phonemes algorithm.)

sp Spelled like constraint: require that the results are spelled similarly to this string of characters, or that they match this wildcard pattern. A pattern can include any combination of alphanumeric characters and the symbols described on that page. The most commonly used symbols are \* (a placeholder for any number of characters) and ? (a placeholder for exactly one character). Please be sure that your parameters are properly URL encoded when you form your request.

rel\_[code] Related word constraints: require that the results, when paired with the word in this parameter, are in a predefined lexical relation indicated by [code]. Any number of these parameters may be specified any number of times. An assortment of semantic, phonetic, and corpus-statistics-based relations are available. At this time, these relations are available for English-language vocabularies only.

[code] is a three-letter identifier from the list below.

[code] Description Example

jja Popular nouns modified by the given adjective, per Google Books Ngrams gradual → increase

jjb Popular adjectives used to modify the given noun, per Google Books Ngrams beach → sandy

syn Synonyms (words contained within the same WordNet synset) ocean → sea

trg "Triggers" (words that are statistically associated with the query word in the same piece of text.) cow → milking

ant Antonyms (per WordNet) late →

spc "Kind of" (direct hypernyms, per WordNet) gondola → boat

gen "More general than" (direct hyponyms, per WordNet) boat → gondola

com "Comprises" (direct holonyms, per WordNet) car → accelerator

par "Part of" (direct meronyms, per WordNet) trunk → tree

bga Frequent followers (w′ such that P(w′|w) ≥ 0.001, per Google Books Ngrams) wreak →

bgb Frequent predecessors (w′ such that P(w|w′) ≥ 0.001, per Google Books Ngrams) havoc → wreak

rhy Rhymes ("perfect" rhymes, per RhymeZone) spade →

nry Approximate rhymes (per RhymeZone) forest → chorus

hom Homophones (sound-alike words) course → coarse

cns Consonant match sample →

v Identifier for the vocabulary to use. If none is provided, a 550,000-term vocabulary of English words and multiword expressions is used. (The value es specifies a 500,000-term vocabulary of words from Spanish-language books. The value enwiki specifies an approximately 6 million-term vocabulary of article titles from the English-language Wikipedia, updated monthly.) Please contact us to set up a custom vocabulary for your application.

topics Topic words: An optional hint to the system about the theme of the document being written. Results will be skewed toward these topics. At most 5 words can be specified. Space or comma delimited. Nouns work best.

lc Left context: An optional hint to the system about the word that appears immediately to the left of the target word in a sentence. (At this time, only a single word may be specified.)

rc Right context: An optional hint to the system about the word that appears immediately to the right of the target word in a sentence. (At this time, only a single word may be specified.)
max Maximum number of results to return, not to exceed 1000. (default: 100)

md Metadata flags: A list of single-letter codes (no delimiter) requesting that extra lexical knowledge be included with the results. The available metadata codes are as follows:

Letter Description Implementation notes

d Definitions Produced in the defs field of the result object. The definitions are from Wiktionary and WordNet. If the word is an inflected form (such as the plural of a noun or a conjugated form of a verb), then an additional defHeadword field will be added indicating the base form from which the definitions are drawn.

p Parts of speech One or more part-of-speech codes will be added to the tags field of the result object. "n" means noun, "v" means verb, "adj" means adjective, "adv" means adverb, and "u" means that the part of speech is none of these or cannot be determined. Multiple entries will be added when the word's part of speech is ambiguous, with the most popular part of speech listed first. This field is derived from an analysis of Google Books Ngrams data.

s Syllable count Produced in the numSyllables field of the result object. In certain cases the number of syllables may be ambiguous, in which case the system's best guess is chosen based on the entire query.

r Pronunciation Produced in the tags field of the result object, prefixed by "pron:". This is the system's best guess for the pronunciation of the word or phrase. The format of the pronunication is a space-delimited list of Arpabet phoneme codes. If you add "&ipa=1" to your API query, the pronunciation string will instead use the International Phonetic Alphabet. Note that for terms that are very rare or outside of the vocabulary, the pronunciation will be guessed based on the spelling. In certain cases the pronunciation may be ambiguous, in which case the system's best guess is chosen based on the entire query.

f Word frequency Produced in the tags field of the result object, prefixed by "f:". The value is the number of times the word (or multi-word phrase) occurs per million words of English text according to Google Books Ngrams.The API makes an effort to ensure that metadata values are consistent with the sense or senses of the word that best match the API query. For example, the word "refuse" is tagged as a verb ("v") in the results of a search for words related to "deny" but as a noun ("n") in the results of a search for words related to "trash". And "resume" is shown to have 2 syllables in a search of rhymes for "exhume" but 3 syllables in a search of rhymes for "macrame". There are occasional errors in this guesswork, particularly with pronunciations. Metadata is available for both English (default) and Spanish (v=es) vocabularies.

qe Query echo: The presence of this parameter asks the system to prepend a result to the output that describes the query string from some other parameter, specified as the argument value. This is useful for looking up metadata about specific words. For example, /words?sp=flower&qe=sp&md=fr can be used to get the pronunciation and word frequency for flower.

The Datamuse API is focused on finding words and phrases, whether for helping your users search, or helping your users write more effectively. It lacks features for describing words and phrases (rich definitions, example sentences, etc.) If you need such amenities for your app, the Wordnik API is a good choice.
