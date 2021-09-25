import React from 'react'

function gameCard({topGame}) {
    return (
        <aside>
            <nav>
                <h3>Top Games</h3>
                {topGame.map(game => (
                    <a
                        href={game.url}
                        target="_blank"
                        key={game.id}
                        rel="noreferrer">
                        { game.name }
                    </a>
                ))}
            </nav>
        </aside>
    )
}

export default gameCard;