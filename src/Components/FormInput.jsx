import React from "react";

const FormInput = () => {
  return (
    <form>
      <div className="form-control">
        <div className="input-group">
          <select className="select select-bordered">
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
              />
              <button className="btn">Go</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FormInput;
