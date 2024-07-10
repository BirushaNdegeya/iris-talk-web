/**
 * @license
 * Copyright 2024 Birusha Ndegeya, sofia and Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { FaSearch } from 'react-icons/fa';
export default function SearchBar() {
    return (
        <div className="bg-gray-200 m-3 flex p-2 rounded-md px-4">
            <input
                type="search"
                placeholder="search a friend"
                className='flex-1 bg-transparent outline-none'
            />
            <button>
                <FaSearch size={24} color='#999' />
            </button>
        </div>
    );
}