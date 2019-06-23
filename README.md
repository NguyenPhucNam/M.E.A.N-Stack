# M.E.A.N-Stack

[type="radio"]:checked,
        [type="radio"]:not(:checked),
        [type="checkbox"]:not(:checked),
        [type="checkbox"]:checked {
            position: absolute;
            left: -9999px;
        }
        [type="radio"]:checked + span,
        [type="radio"]:not(:checked) + span
        {
            position: relative;
            padding-left: 28px;
            cursor: pointer;
            line-height: 20px;
            display: inline-block;
            color: #666;
        }
        [type="radio"]:checked + span:before,
        [type="radio"]:not(:checked) + span:before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            width: 18px;
            height: 18px;
            border: 1px solid #ddd;
            border-radius: 100%;
            background: #fff;
        }
        [type="radio"]:checked + span:after,
        [type="radio"]:not(:checked) + span:after {
            content: '';
            width: 12px;
            height: 12px;
            background: #F87DA9;
            position: absolute;
            top: 4px;
            left: 4px;
            border-radius: 100%;
            -webkit-transition: all 0.2s ease;
            transition: all 0.2s ease;
        }
        [type="radio"]:not(:checked) + span:after {
            opacity: 0;
            -webkit-transform: scale(0);
            transform: scale(0);
        }
        [type="radio"]:checked + span:after {
            opacity: 1;
            -webkit-transform: scale(1);
            transform: scale(1);
        }


        /* Base for label styling */
        [type="checkbox"]:not(:checked) + span,
        [type="checkbox"]:checked + span {
            position: relative;
            padding-left: 1.95em;
            cursor: pointer;
        }

        /* checkbox aspect */
        [type="checkbox"]:not(:checked) + span:before,
        [type="checkbox"]:checked + span:before {
            content: '';
            position: absolute;
            left: 0; 
            top: 0;
            width: 1.25em; height: 1.25em;
            border: 2px solid #ccc;
            background: #fff;
            border-radius: 4px;
        }
        /* checked mark aspect */
        [type="checkbox"]:not(:checked) + span:after,
        [type="checkbox"]:checked + span:after {
            content: '\2713\0020';
            position: absolute;
            top: .15em; 
            left: .22em;
            font-size: 1.3em;
            line-height: 1;
            transition: all .2s;
        }
        /* checked mark aspect changes */
        [type="checkbox"]:not(:checked) + span:after {
            opacity: 0;
            transform: scale(0);
        }
        [type="checkbox"]:checked + span:after {
            opacity: 1;
            transform: scale(1);
        }
