// SPDX-License-Identifier: MIT


pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

/**
------------------------------------------------------------------------------------------------
WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWNx>+|}dWWWWWWWWWWWWWWWWWWWWWWW
WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWy`      _dWWWWWWWWWWWWWWWWWWWWW
WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWQUr^*JPf, `XWWWWWWWWWWWWWWWWWWWW
WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW&'  ~QWWWWWWWWWWWWWWWWWWW
WWWWWWWWWWWWWWWWWWWWWWWWWWWWQ?'-,*BWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWv   QWWWWWWWWWWWWWWWWWWW
WWWWWWWWWWWWWWWWWWWWWWWWWWWA-     xQWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWP   QWWWWWWWWWWWWWWWWWWW
WWWWWWWWWWWWWWWWWWWWWWWWWWQ-     ,#WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWq  `QWWRkWWWWWWWWWWWWWWW
WWWWWWWWWWWWWWWWWWWWWdWWWW>    _jQWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWq  ~Qm,  ^QWWWWWWWWWWWWW
WWWWWWWWWWWWWWWWWWWQ_ ^QWb  `|WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWm  7=  !RWWWWWWWWWWWWWWW
WWWWWWWWWWWWWWWWWWWa  yWQ~ >gWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWt    ~KWWWWWWWWWWWWWWWWW
WWWWWWWWWWWWWWWWWWWJ  !j; }WWWRfQWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWQ+   ?QWNQWWWWWWWWWWWWWWW
WWWWWWWWWWWWWWWWWWWY    :+QQUi`LQWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWQ'   *~` ~QWWWWWWWWWWWWWW
WWWWWWWWWWWWWWW&WWWt    `+o=^+kQWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWNf|cGQX      ;mQWWWWWWWWWWWWWWW
WWWWWWWWWWWWWWN ;gg:   'X;     ~gWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWQ^     ,U~ -=?RWWWWWWWWWWWWWWWWWW
WWWWWWWWWWWWWWQ  `~;-  X~       .RWWWWWWWWWWWWWWWWWWWWWWWWWWWWQ,       _d` ^QWWWWWWWWWWWWWWWWWWW
WWWWWWWWWWWWWWW;`Y,'''_X *|Uj`   ~WWWWWWWWWWWWWWWWWWWWWWWWWWWW=    z6iL I^~&WWWWWWWWWWWWWWWWWWWW
WWWWWWWWWWWWWWWR- =^~',^uQhQQ;   'QWQDXof{}yk#WWWWQUy}{fyGDQWQ;   'QQGQ}r,'_iQWWWWWWWWWWWWWWWWWW
WWWQUt>!~,,',,~!+k,      yyr,    vJ,~;+*;-    JQWI    `;*=;~,zo    '^Jq      ,R*!~,,',,~;>zhQWWW
Wm_   `~^7*,     n-    !\w|     =5    7^'m|   =QQ>   !q'~a    77     ;6c^    -o     ,+z^;`   ,}W
W'  '|d; +g~     `z\~``7QQX=^^>c!    iXiz\   'NWWN~   =ziZ\    ~v>+^=yQQy``,|z'     'd= ,di,  `W
WQ|`. -|If'k?`    .;7jyyo,z7!,      cU'\;   ~NWWWWQ+   ~7'Xy`     ,;7j'5j5jz;.     *K'fji- .`+8W
WWWQy~  `^i6^Z^        `>.,;      ,o7Xi`  ;AQWWWWWWQq^   >Xcm,      ;~`*-        ~S+Zzr`  ,IQWWW
WWWWWWQy^` `^*X6*`               i6v;  ,Ljo>>**?|Li\cjoL~  ~i6u`               ^6H|^- `;{QWWWWWW
WWWWWWw~~*?*^,` ;}|'           ,k?'~>?|!`              `;||*~'^U;           `|fr  ,^*??;;RWWWWWW
WWWWQ^    '^s^=*>>7qy^`      'Zk7|!,''                    ``,!?cmS_      `!nK7>>*>!PL     cQWWWW
WWWQ;      g'`       '>L;` .\j,      ,*\\iL|?*>=+^^!!;;~~^'      ,It. `;L*,       `g' `    7WWWW
WWQ_ `  ^z y{'          '+=|'          7WWWWWWWWWWWWWWWWy`         .|>='          .R`jH` :` SWWW
WW^ ^m 'Wmjq;                           ;#WWWWWWWWWWWWQ;                           aGxjS *g_`mWW
Wo`yQi`k* zS                             'RWWWWWWWWWWQ~                            `s~`q^'QQ>'QW
W{#WW~az  S'                              .RWWWWWWWWg,                              `6 `m!DWWNQW
WWWWWaz? ^P                                'gWWWWWWQ,                                J^ ^jzQWWWW
WWWWWQWQ!a*                                 +QWWWWWz                                 ;S:QWQWWWWW
WWWWWWWWQQ;                                 `QWWWWQ_                                 'QQWWWWWWWW
WWWWWWWWWQ+                                 'QWWWWQ;                                 :QWWWWWWWWW
WWWWWWWWWWG                                `wWWWWWWd.                                tWWWWWWWWWW
WWWWWWWWWWWz                             `>QWWWWWWWWQ\`                             >QWWWWWWWWWW
WWWWWWWWWWWWK>`                        ~xNWWWWWWWWWWWWQI;`                       `^HWWWWWWWWWWWW
WWWWWWWWWWWWWWWRoL!_'`          `,;*}DQWWWWWWWWWWWWWWWWWWQDj|;,.          `-,!|jRWWWWWWWWWWWWWWW
WWWWWWWWWWWWWWWWWWQWWWWQQQQQQQQWWWQWWWWWWWWWWWWWWWWWWWWWWWWWWQWWWQQQQQQQQWWWWQWWWWWWWWWWWWWWWWWW
WWWWWWWWWWWWWWWWWWWQWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWQWWWWWWWWWWWWWWWWWWW
WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWQWWWWWWWWWWWWWWWWWWWWWWWWWWWWQWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
WWWWWWWWWWWWWWWWWWWWQWWWWWWWWWWWWQQQQQQWWWWWWWWWWWWWWWWWWQQQQQQWWWWWWWWWWWWQWWWWWWWWWWWWWWWWWWWW
WWWWWWWWWWWWWWWQQWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWQQQWWWWWWWWWWWWWW
WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
                                                                                                                                                                       
'||''''|'|| '||'  '|''||''|. '||    ||'               '||                  '||''|.                 .'|.|| '||        
 ||  .   '|. '|.  .'  ||   || |||  |||  .... .. .. ..  || ...   .... ... .. ||   ||... ..   ...  .||. ...  ||  ....  
 ||''|    ||  ||  |   ||'''|. |'|..'||.|...|| || || || ||'  ||.|...|| ||' ''||...|' ||' ''.|  '|. ||   ||  ||.|...|| 
 ||        ||| |||    ||    ||| '|' ||||      || || || ||    |||      ||    ||      ||    ||   || ||   ||  ||||      
.||.        |   |    .||...|'.|. | .||.'|...'.|| || ||.'|...'  '|...'.||.  .||.    .||.    '|..|'.||. .||..||.'|...'                                                                                                                                                                                                                                                                                                        
---------------------------------------------------------------------------------------------------------------------                                                                                                                                                                                                                                                                                                                           
TESTNET V0

"FWBMemberProfile"          :   FWBMemberProfile is an ERC-721 Contract that allows Friends With Benefits members to 
                                mint a "MemberProfile" NFT. Token URI's point to off-chain metadata containing member
                                profile data. This version is intended only as a test, and does not implement access 
                                controls outside of a single permissioned contract owner.

@author                     :   @computerdata / @bretth18
@title                      :   FWBMemberProfile
@dev                        :   Token URI's and baseURI can be set via permissioned owner. Ownership is transferrable.
                                This version uses openzeppelin ERC721URIStorage, Ownable and Counters for ease and
                                security purposes.

 */
contract FWBMemberProfile is ERC721URIStorage, Ownable {
   
    /// Counters library is used for safe enumeration
    using Counters for Counters.Counter;
    /// Private variable for tracking tokenIds
    Counters.Counter private _tokenIdCounter;
    /// String variable to hold our baseURI
    string public baseURI;


    /// Constructor
    constructor() ERC721("FWB Member Profile v0", "FWBMPv0"){}


    /* 
            mint()
    @notice Mints a new FWBMemberProfile token to the calling 
            address and increments the total tokenId count.
    @dev    safeMint is used to ensure tokenId does not exist 
            and the receiver has implemented onERC721Received.

    @param  to The address of the receipient of the token.
    **/
    function mint() public  {
        // call _safeMint
        _safeMint(msg.sender, _tokenIdCounter.current());
        /// Increment token id
        _tokenIdCounter.increment();
    }


    /* 
            setBaseURI()
    @notice sets the token's baseURI, permissioned for
            contract owner access only.
    @dev    baseURI is not set by default. this function 
            should be called by the contract owner.

    @param  newURI the replacement string URI (e.g "ipfs://")
    **/
    function setBaseURI(string memory newURI) external onlyOwner  {
        baseURI = newURI;
    }




    /// Overrides

    /*
            _baseURI()
    @notice override function for baseURI.
    @dev    baseURI is not set by default.
    @return string containing the base URI. 
    **/
    function _baseURI() internal view override returns (string memory) {
        return baseURI;
    }


    /// Required solidity overrides
    function _burn(uint256 tokenId) internal override(ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId) public view override(ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }


}