import React from 'react'

export default function Switch() {
  return (
    <div class="graph-control">

        <div>
            <input type="text" placeholder="trouver un noeud" />
            <button>ok</button>
        </div>

        <div>
            <input type="text" placeholder="nom du noeud" />
            <button>ok</button>
        </div>

        <div>
            <input type="text" placeholder="nom du noeud" />
            <select name="" id="">
                <option>in</option>
            </select>
            <select name="" id="">
                <option>out</option>
            </select>
            <button>ok</button>
        </div>
    </div>
  )
}
