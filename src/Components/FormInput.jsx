import React from "react";
import { useForm } from "react-hook-form";

const BASE_URL = "https://api.datamuse.com/words?";

const searchWord = async (url) => {
  console.log("apiUrl", url);

  const res = await fetch(url);
  const result = await res.json();
  console.log("apiResponse", result);
  return result;
};

const FormInput = ({ setWords }) => {
  const { register, handleSubmit } = useForm();
  const onSubmitWordSearchForm = async (data) => {
    console.log("form data", data);

    // const metaQuery = Object.entries(data).filter(([key, value]) =>
    //   key !== "word" || key !== "filter")

    const metaQuery = { ...data }

    for (const prop in metaQuery) {
      if (prop === "word" || prop === "filter") {
        delete metaQuery[prop]
      }
    }

    const metaUri = metaQuery && Object.values(metaQuery).filter(val => val !== false).join(",")
    console.log("metaQuery", metaQuery);



    const apiResponse = await searchWord(
      metaUri ? BASE_URL + data.filter + "=" + data.word + "&md=" + metaUri : BASE_URL + data.filter + "=" + data.word
    );

    setWords(apiResponse);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitWordSearchForm)}>
      <div className="form-control">
        <div className="input-group">
          <select className="select select-bordered" {...register("filter")}>
            <option disabled selected>
              Pick Constraints
            </option>
            <option value="ml">Means Like</option>
            <option value="sl">Sounds Like</option>
            <option value="sp">Spelled Like</option>
            <option value="rel_syn">Synonyms</option>
            <option value="rel_ant">Antonyms</option>
            <option value="rel_hom">Homophones</option>
            <option value="rel_cns">Consonant Match</option>
            <option value="rel_rhy">Rhymes</option>
            <option value="rel_nry">Rhymes Approx</option>
            <option value="rel_jjb">Related Adjectives</option>
            <option value="rel_jja">Related Nouns</option>
            <optgroup>
              <option value="rel_trg">
                Statistically associated with (trigger)
              </option>
              <option value="rel_spc">Direct hypernyms (kind of)</option>
              <option value="rel_gen">
                Direct hyponyms (More general than)
              </option>
              <option value="rel_com">Direct holonyms (Comprises)</option>
              <option value="rel_par">Direct meronyms (Part of)</option>
              <option value="rel_bga">
                Frequent follower (wreck-&gt;havoc)
              </option>
              <option value="rel_bgb">
                Frequent predecessors (havoc-&gt;wreck)
              </option>
            </optgroup>
          </select>
          <div className="form-control">
            <div className="input-group">
              <input
                type="text"
                placeholder="Search…"
                className="input input-bordered"
                {...register("word")}
              />
              <button className="btn">Go</button>
            </div>
          </div>
        </div>
        <div className="input-group">
          <div className="form-control">
            <label className="cursor-pointer label">
              <input type="checkbox" value="d" className="checkbox checkbox-accent" {...register("definition")} />
              <span className="label-text">Definition</span>
            </label>
          </div>
          <div className="form-control">
            <label className="cursor-pointer label">
              <input type="checkbox" value="p" className="checkbox checkbox-accent" {...register("partsOfSpeech")} />
              <span className="label-text">Parts of speech</span>
            </label>
          </div>
          <div className="form-control">
            <label className="cursor-pointer label">
              <input type="checkbox" value="s" className="checkbox checkbox-accent" {...register("syllableCount")} />
              <span className="label-text">Syllable count</span>
            </label>
          </div>
          <div className="form-control">
            <label className="cursor-pointer label">
              <input type="checkbox" value="r" className="checkbox checkbox-accent" {...register("pronunciation")} />
              <span className="label-text">Pronunciation</span>
            </label>
          </div>
          <div className="form-control">
            <label className="cursor-pointer label">
              <input type="checkbox" value="f" className="checkbox checkbox-accent" {...register("wordFrequency")} />
              <span className="label-text">Word frequency</span>
            </label>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FormInput;
